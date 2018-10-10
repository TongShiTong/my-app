import React, {Component} from 'react'
import notMatchImg from './yhy.jpg'
import {Link} from 'react-router-dom'
import './index.less'

class NotMatch extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='notmatch clearfix'>
                <div className='notmatch-left fll'>
                    <div className='title'>Oh My God!</div>
                    <h2 className='desc'>404没有找到你要的页面。</h2>
                    <strong>这个页面加载不出来</strong>
                    <ul>
                        <li>或者你可以去</li>
                        <li>
                            <Link to='/admin/home'>回首页</Link>
                        </li>
                    </ul>
                </div>
                <div className='img-wrap fll'>
                    <img src={notMatchImg} alt=""/>
                </div>
            </div>
        )
    }
}

export default NotMatch