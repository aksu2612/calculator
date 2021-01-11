import React, { Component } from 'react'
import { Text, View ,Button} from 'react-native'
import NumericInput from 'react-native-numeric-input'
export class Home extends Component {
    constructor(){
        super()
        this.state={
            number1:0,
            number2:0, 
            result:0
        }
        this.onChangeNumberOne =this.onChangeNumberOne.bind(this);
        this.onChangeNumberTwo =this.onChangeNumberTwo.bind(this);
        this.calculate=this.calculate.bind(this);
    }
    onChangeNumberOne(e){
        this.setState({
            number1:e
        })
        console.log(this.state.number1)
    }
    calculate(){
            this.setState({
                result:this.state.number1*this.state.number2
            })
            console.log(this.state.number1)
            console.log(this.state.number2)
            console.log(this.state.result)
    }
    onChangeNumberTwo(e){
        this.setState({
            number2:e
        })
    } 
    render() {
        return (
            <View>
            <NumericInput 
            value={this.state.value} 
            onChange={value => this.onChangeNumberOne(value)} 
            onLimitReached={(isMax,msg) => console.log(isMax,msg)}
            totalWidth={240} 
            totalHeight={50} 
            iconSize={25}  
            valueType='real' 
            rounded 
            textColor='#B0228C' 
            iconStyle={{ color: 'white' }} 
            rightButtonBackgroundColor='#EA3788' 
            leftButtonBackgroundColor='#E56B70'/> 
             <NumericInput 
            value={this.state.value} 
            onChange={value => this.onChangeNumberTwo(value)} 
            onLimitReached={(isMax,msg) => console.log(isMax,msg)}
            totalWidth={240} 
            totalHeight={50} 
            iconSize={25}  
            valueType='real' 
            rounded 
            textColor='#B0228C' 
            iconStyle={{ color: 'white' }} 
            rightButtonBackgroundColor='#EA3788' 
            leftButtonBackgroundColor='#E56B70'/>
             <Button 
                title="Calculate"
                onPress={()=>this.calculate()}
             /> 
             <Text> result=> CalculateFix Brunch  {this.state.result}
             </Text>
            </View>
        )
    }
}

export default Home
