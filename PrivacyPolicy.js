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

const thePolicy = "Violent Hobo Enterprises built the Russian Roulette app as a Free app. This SERVICE is provided by Violent Hobo Enterprises at no cost and is intended for use as is.\n\nThis page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.\n\nIf you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.\n\nThe terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at Russian Roulette unless otherwise defined in this Privacy Policy.\n\nInformation Collection and Use\n\nWe do not collect any personally identifiable information\n\nChanges to This Privacy Policy\n\nWe may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.\n\nContact Us\n\nIf you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at violenthoboenterprises@gmail.com."
