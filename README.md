#React-native-tabbar

## 有问题反馈
在使用中有任何问题，欢迎反馈给我，也可以用以下联系方式跟我交流

* 邮件(Netxy#vip.qq.com, 把#换成@)
* QQ: 850265689

## 使用

```javascript
 class App extends Component {
  render() {
    return (
      <Tabbar activeColor={'red'}>
        <Tabbar.Item 
        	title={"小"} 
        	icon={{uri:'http://www.iconpng.com/png/inkalligraphic_icon/126-smiley.png'}} 
        	activeIcon={{uri:'http://www.iconpng.com/png/inkalligraphic_icon/426-smiley.png'}}
        >
          <View style={{backgroundColor:'#F00',flex:1}}></View>
        </Tabbar.Item>
        <Tabbar.Item 
        	title={"小"} 
        	icon={{uri:'http://www.iconpng.com/png/inkalligraphic_icon/223-smiley-sad.png'}} 
        >
          <View style={{backgroundColor:'#0F0',flex:1}}></View>
        </Tabbar.Item>
        <Tabbar.Item 
        	title={"小"} 
        	icon={{uri:'http://www.iconpng.com/png/font_awesome/f119.png'}} 
        	activeIcon={{uri:'http://www.iconpng.com/png/font_awesome/f118.png'}}
        >
          <View style={{backgroundColor:'#00F',flex:1}}></View>
        </Tabbar.Item>
        <Tabbar.Item 
        	title={"小"} 
        	icon={{uri:'http://www.iconpng.com/png/brankic1979/sad.png'}} 
        	activeIcon={{uri:'http://www.iconpng.com/png/brankic1979/smiley.png'}}
        >
          <View style={{backgroundColor:'#FFF',flex:1}}></View>
        </Tabbar.Item>
      </Tabbar>
    );
  }
}
```