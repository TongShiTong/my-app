import React,{Component} from 'react'
import './index.less'

class Footer extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="footer">
                版权所有，（推荐使用谷歌浏览器，可以获得更加操作页面体验）
            </div>
        )
    }
}

export default Footer