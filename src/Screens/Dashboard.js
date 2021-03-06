import React from 'react';
import { auth } from '../firebase';
import { doc, setDoc, getFirestore } from "firebase/firestore";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { Button } from 'style-components';
import BarChart from 'react-easy-bar-chart';

export default function Dashboard(props) {
  const history = useHistory();
  const data = props.location.state.data;
  const uid = props.location.state.uid;
  const apiData = props.location.state.apiData;
  // counts for grass, tree, and weed pollen
  const grassPollen = apiData.data[0].Count.grass_pollen;
  const treePollen = apiData.data[0].Count.tree_pollen;
  const weedPollen = apiData.data[0].Count.weed_pollen;

  


  // gets the risk
  const grassRisk = apiData.data[0].Risk.grass_pollen;
  const treeRisk = apiData.data[0].Risk.tree_pollen;
  const weedRisk = apiData.data[0].Risk.weed_pollen;

  //assigns and organizes the data that will be used in the chart
  const data2 = [
    {
      title:  "Grass",
      value: grassPollen,
      color: barColor(grassRisk),
    },
    {
      title:  "Tree",
      value: treePollen,
      color: barColor(treeRisk),
    },
    {
      title:  "Weed",
      value: weedPollen,
      color: barColor(weedRisk),
    },
    ];

  // getting top allergens
  const species = apiData.data[0].Species.Tree;
  // Get an array of the keys:
  let keys = Object.keys(species);

  // Then sort by using the keys to lookup the values in the original object:
  keys.sort(function(a, b) { return species[a] - species[b] });

  console.log("keys ", keys);

  const firestore = getFirestore();
  console.log("uid: ", uid);
  console.log("Api data: ", apiData);
  // grabs location
  const location = props.location.state.location;

  //handles the signout and changes the auth
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        //log the action
        var date = new Date();
        var dateLabel = date.toString();
        setDoc(doc(firestore, "logs", dateLabel), {
            action: "signed out",
            user: uid,
        }).then(() => {
            history.push({
                pathname:"/",
              });
        });
      })
      .catch(error => alert(error.message))
  }

  // redirects to account info page with data and uid
  const handleAccount = () => {
    history.push({
      pathname:"/account",
      state: {data, uid, apiData}
    });
  }


  const btnStyle = {
    margin: "1rem",
    color: 'orange',
  };


  return (
    <>
      <div className='chart'>
        <div>
        <Button onClick={handleAccount} style={btnStyle} className='button'>Account Info</Button>
          <Button onClick={handleSignOut} style={btnStyle} className='button'>Sign Out</Button>
          <h1>Dashboard</h1>


        </div>
        <div>...</div>
        <div>
        <header>Hello, {data.name}.</header>
        <header>Today's Pollen Report:</header>
        </div>
        <h5><BarChart
          axes
          grid
          axisLabels={{x: 'Pollen Level', y: 'Count'}}
          margin={{top: 0, right: 0, bottom: 30, left: 100}}
          yAxisOrientRight
          xAxis='Pollen Level'
          yAxis="Count"
          height={300}
          width={700}
          data={data2}
          backgroundColor='white'
        />

        </h5>
        

      </div>
      <div>

      <h3>Grass Pollen: {grassRisk}</h3>
        <h3>Tree Pollen: {treeRisk}</h3>
        <h3>Weed Pollen: {weedRisk}</h3>
        <h3>Top Allergens: {keys[8]}, {keys[7]}, {keys[6]}</h3>
      {/* </div>
      <div> */}


        </div>
    </>
  )
}

//Sets the color of the bars in the bar chart based on what the risk is for the day
function barColor(risk){
  if(risk.localeCompare("High") == 0){
    return "#d42c2c";
  } else if (risk.localeCompare("Moderate") == 0){
    return "#f2a93b";
  } else{
    return "#00a31b";
  }
}
