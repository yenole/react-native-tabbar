'use strict'
import React,{
	View,
	Image,
	Text,
	TouchableHighlight
} from 'react-native';

export default class TabBar extends React.Component{
	constructor(props){
		super(props);
		let active = 0;
		this.props.children && this.props.children.forEach((e,k)=>{
			e.props.active && (active = k);
		});
		this.state = {
			active:active
		}
	}
	render(){
		return (
			<View style={{flex:1}}>
				<View style={styles.content}>
					{this.props.children && this.props.children[this.state.active].props.children}
				</View>
				<View style={[styles.tabbar,this.props.style]}>
					{this.props.children && this.props.children.map((e,k)=>{
						return <TabBarItem key={k} {...e.props} active={this.state.active == k} tabbar={this} index={k}/>;
					})}
				</View>
			</View>
		);
	}
}

class TabBarItem extends React.Component{
	onPress(e){
		this.props.tabbar && this.props.tabbar.setState({active:this.props.index});
		this.props.onPress && this.props.onPress(this);
	}
	render(){
		return(
			<View style={styles.item}>
				<TouchableHighlight onPress={this.onPress.bind(this)} activeOpacity={1} underlayColor='#FFF0'>
					<Image style={styles.item_img} source={this.props.active && this.props.activeIcon ? this.props.activeIcon : this.props.icon} />
				</TouchableHighlight>
				<Text style={[styles.item_txt,this.props.active && {color:this.props.tabbar.props.activeColor}]} suppressHighlighting={true} onPress={this.onPress.bind(this)}>{this.props.title}</Text>
			</View>
		);
	}
}

TabBar.Item = TabBarItem;


const styles = React.StyleSheet.create({
	tabbar:{
		left:0,
		right:0,
		bottom:0,
		height:55,
		position:'absolute',
		flexDirection:'row',
		backgroundColor:'white',
		borderTopWidth:1,
		borderTopColor:'#DDD'
	},
	item:{
		flex:1,
		alignItems:'center',
		justifyContent:'center'
	},
	item_img:{
		width:32,
		height:32,
		marginTop:4,
	},
	item_txt:{
		marginTop:2,
		fontSize:12,
	},
	content:{
		flex:1,
		marginBottom:55
	}
});