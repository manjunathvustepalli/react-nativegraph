import React from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-navigation';
import Plotly from 'react-native-plotly';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { Dimensions } from "react-native";

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true,
    dataSource:[[]],
  dataSource1:[],
  dataSource2:[],
  dataSource3:[],




}
  }

  async componentDidMount(){
    let a=[];
    let b=[];
    let c=[];
    let d=[];
    try {
      const response = await fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=MSFT&apikey=776BOHXHC4RTWISC');
      const responseJson = await response.json();
      let i = 0;
      for (var key in responseJson["Time Series (Daily)"]) {
        i++;
        if (i <6) {
          a.push(key);
          b.push(responseJson["Time Series (Daily)"][key]["4. close"]);
          c.push(responseJson["Time Series (Daily)"][key]["2. high"]);
          d.push(responseJson["Time Series (Daily)"][key]["6. volume"]);
          
        }
        else {
          break;
        }
      }
        this.setState({
          isLoading: false,
          dataSource: a,
          dataSource1: b,
          dataSource2: c,
          dataSource3: d,
        });
      console.log(this.state.dataSource3)
      
    }
    catch (error) {
      console.error(error);
    }
  }



  render(){
    
    const screenWidth = Dimensions.get("window").width;
    if(this.state.isLoading){
      return(
        
        <View style={{flex: 1, padding: 50,alignItems:"center",justifyContent:"center"}}>
          <ActivityIndicator/>
        </View>
        
      )
    }
    else{
      
      
      
    return(
      // <SafeAreaView style={{flex: 1, paddingTop:20}}>
      
      
      //   <FlatList 
      //     data={this.state.dataSource}
      //     renderItem={({item}) => <Text>{item}</Text>}
          
      //   />
      //   <FlatList
      //     data={this.state.dataSource1}
      //     renderItem={({item}) => <Text>{item}</Text>}
          
      //   />

        
      //   </SafeAreaView>
      <SafeAreaView>
  <Text style={{alignSelf:"center"}}> chart for microsoft stock on different dates with values</Text>
  <LineChart
    data={{
      labels: this.state.dataSource,
      datasets: [
        {
          data: this.state.dataSource2
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={Dimensions.get("window").height}
    yAxisLabel={""}
    yAxisSuffix={""}
    chartConfig={{
      backgroundColor: "#fff",
      backgroundGradientFrom: "#ff0000",
      backgroundGradientTo: "#fff",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "5",
        strokeWidth: "2",
        stroke: "#fff"
      }
    }}
    // bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
</SafeAreaView>
      
      
    );
      
  }
}
}
