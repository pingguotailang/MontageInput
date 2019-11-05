import React from "react";
const fsy = ['italic','normal'];
const fw = [400,500,600,700,800,900];
const fontFamilys = ['宋体', '微软雅黑', '楷体', 'Arial', 'Verdana','Fixedsys','impact', '华文黑体', 'Lobster','Ink free', 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', 'Helvetica', 'sans-serif', 'Microsoft jhengHei','Segoe UI Emoji', 'Segoe UI Symbol']
class MontageInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            montages: [],
        }
        this.sizeMin = 10;
        this.sizeMax = 80;
    }
    onChange = (e) => {
        let value = e.target.value;
        this.setState({ value });
    }
    onClick = () => {
        this.setState({ montages: this.createMontage(this.state.value) })
    }
    color16() {//十六进制颜色随机
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        var color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
        return color;
    }
    createMontage = (value) => {
        let arr = value.split("");
        let montages = [];
        arr.forEach(element => {
            let montage = <span style={{
                color: this.color16(),
                fontSize: parseInt(Math.random() * (this.sizeMax - this.sizeMin + 1) + this.sizeMin, 10),
                fontFamily: fontFamilys[parseInt(Math.random() * (fontFamilys.length - 1), 10)],
                fontStyle:fsy[parseInt(Math.random() * (fsy.length + 1), 10)],
                fontWeight:fw[parseInt(Math.random() * (fw.length + 1), 10)],
            }}>{element}</span>
            montages.push(montage);
        });
        return montages;
    }
    render() {
        return <div>
            <input onChange={this.onChange.bind(this)}></input>
            <button onClick={this.onClick.bind(this)}>create</button>
            <div>
                {this.state.montages}
            </div>
        </div>
    }
}
export default MontageInput;