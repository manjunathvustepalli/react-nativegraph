import block from './block';
import post from './post';
import edit from './edit';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
const NavStack= createStackNavigator({
    block:{
        screen:block
    },
    

})
const BottomTab =createBottomTabNavigator({
    NavStack:{
        screen:NavStack
    },
    post:{
        screen:post
    },
    edit:
    {
        screen:edit
    },

})
export default Routes=createAppContainer(BottomTab)