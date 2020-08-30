import {createMuiTheme} from '@material-ui/core/styles';
//file to hold our default theme and constant color objects
export const theme = createMuiTheme({
    palette: {
        primary: {
           main: "#009688"
        },
        secondary:{
            main: "#4db6ac"
        }
    }
});
//common styles for text, card, etc
//Note objects styling don't take -
export const styles = {
    textLinks: {
        color: "white",
        fontWeight: 'bold',
        fontSize:"130%",
        textDecoration: "none",
        margin: "0px 10px 0px",
        
    },
    header:{
        position: "static",
        height: "83px",
    },
    //all link in one div tag to place on right side
    links: {
       position: "absolute",
       paddingTop: "15px",
       right: "30px",
    },
    //container for the logo to have a fit position on left side
    logoContainer: {
        position:"absolute",
        paddingTop: "16px",
        paddingLeft: "10px"
    },
    //adjusting the size for logo in the app
    logo: {
        width: "6.5%",
        height: "8%",
        borderRadius: "70%"
    },
    //styling for the recipe cards
    card: {
        width: "325px",
        height: "280px",
        backgroundColor: "#4db6ac",
        marginTop: "13px"
    }, //css style for when hovering over the card
    cardHover: {
        width: "330px",
        height: "285px",
        backgroundColor: "#4db6ac",
        opacity: 0.8
    },
    cardText: {
        color: "white",
        fontFamily: "Georgia",
        fontWeight: "bold",
        //make sure the text is align to left side
        textAlign: "left",
        textDecoration: "none"
    }, //styling for the images on the cards
    cardImage: {
        height: "130px",
        paddingTop:"30px"
    },
    //card text for money
    moneyText: {
        color:"#76ff03",
        fontSize: "115%"
    },
    image: {
        height: "45%",
        width: "35%",
        border: "2px solid black"
    }
}

