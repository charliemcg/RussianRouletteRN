import React, {Component} from "react"
import {Text, ScrollView} from "react-native"

class PrivacyPolicy extends Component{
    render(){
        return(
            <ScrollView
                style={{marginBottom: 20}}>
                <Text
                    style={{fontSize: 17, padding: 15}}
                >{thePolicy}</Text>
            </ScrollView>
        )
    }
}

export default PrivacyPolicy

const thePolicy = "Blah bl;ah b;ah blah blah blah blah blah blah blah blah blab lah "