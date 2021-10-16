import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View ,Modal ,Image ,ScrollView } from 'react-native'




export default function News({modal,setmodal,getcountry}) {

    const [allnews, setallnews] = useState([])

    useEffect(() => {

        if(getcountry !== ''){
            // Get News
        fetch(`https://newsapi.org/v2/everything?q=${getcountry}&sortBy=publishedAt&apiKey=582d2cd0a6a54c83b45858d4d3088a1e`)
        .then(res => res.json())
        .then(data => {setallnews(data.articles)    })
        }

     
    }, [getcountry])

    
    console.log(allnews)

    return (
        <View>
            <Modal visible={modal} animationType="slide">

                <View style={styles.newsContainer} >

                    {/* Navbar */}
                    <View style={styles.newsNavbar}>
                    <Text style={styles.navbarTitle}>News</Text>
                    <Text style={styles.navbarClose} onPress={() => {
                        setmodal(false)
                        setallnews([])
                        }}>X</Text>
                    </View>

                    {/* News Content */}
                    <ScrollView>

                    {allnews.length === 0 || allnews === undefined ?  <Image style={styles.loader} source={require('../assets/loading.gif')}  />
                        : allnews.map((news,index) => (
                        <View style={styles.card} key={index}>
                        <Image
                        style={{width:'100%',height:'100%',borderTopLeftRadius:25,borderTopRightRadius:25}}
                        source={{
                        uri: news.urlToImage,}} />
                        <View style={styles.cardContent}>
                        <Text style={styles.title}>{news.title}</Text>
                        <Text style={styles.date}>{news.publishedAt}</Text>
                        </View>
                        </View>

                    ))}
                    
                    </ScrollView>

                </View>

            </Modal>
            
        </View>
    )
}

const styles = StyleSheet.create({
    newsContainer:{
        margin:15
    },
    newsNavbar:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:10
    },
    navbarTitle:{
        fontSize:25
    },
    navbarClose:{
        fontSize:25,
        margin:5,
        padding:10,
        marginTop:-10
    },
    card:{
        margin:10,
        height:150,
        marginBottom:180,
        shadowColor: "#000",
        elevation: 3,
        borderTopLeftRadius:25,
        borderTopRightRadius:25
        
    },
    cardContent:{
        shadowColor: "#000",
        elevation:1,
        borderColor:'#000',
        padding:20,

    },
    title:{
        fontSize:20,
        fontWeight:'bold'
    },
    date:{
        color:'grey'
    },
    loader:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        margin:40
    }
    
})
