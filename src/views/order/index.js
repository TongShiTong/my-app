import React, {Component} from 'react'
import {Form, Select, Card, DatePicker, Button} from 'antd'
import './index.less'

const FormItem = Form.Item
const Option = Select.Option
const {RangePicker} = DatePicker

class Order extends Component {
    constructor(props){
        super(props)
    }

    cityOptions = [
        {
            label: '北京',
            value: '0'
        },
        {
            label: '广州',
            value: '1'
        },
        {
            label: '上海',
            value: '2'
        },
    ]

    orderStatus = [
        {
            label: '进行中',
            value: '0'
        },
        {
            label: '已完成',
            value: '1'
        },
        {
            label: '结束订单',
            value: '2'
        },
    ]

    //查询获取表单数据
    handleSearch = () => {
        console.log(this.props.form.getFieldsValue())
    }

    //重置数据
    resetData = () => {
        this.props.form.resetFields()
    }

    render(){
        const { getFieldDecorator } = this.props.form;

        return (
            <div className='order'>
               <Card>
                   <Form
                       layout='inline'
                   >
                       <FormItem
                       label='城市'
                   >
                           {
                               getFieldDecorator('city', {
                                   initialValue: '1'
                               })(
                                        <Select style={{width: 150}}>
                                            {this.cityOptions.map(item => <Option value={item.value} key={item.value}>{item.label}</Option>)}
                                       </Select>
                               )
                           }
                   </FormItem>
                       <FormItem
                           label='订单时间'
                       >
                           {
                               getFieldDecorator('date')(
                                   <RangePicker></RangePicker>
                               )
                           }
                       </FormItem>
                       <FormItem
                           label='订单状态'
                       >
                           {
                               getFieldDecorator('order_status')(
                                   <Select style={{width: 220}}>
                                       {this.orderStatus.map(item => <Option value={item.value} key={item.value}>{item.label}</Option>)}
                                   </Select>
                               )
                           }
                       </FormItem>
                   </Form>
                   <div className='btn-wrap'>
                       <Button type='primary' className='btn' onClick={this.handleSearch}>查询</Button>
                       <Button type='waring' className='btn' onClick={this.resetData}>重置</Button>
                   </div>
               </Card>
                <Card style={{marginTop: '-1px'}}>
                    <Button type='primary' className='mgr-20'>订单详情</Button>
                    <Button>结束订单</Button>
                </Card>
                <Card>

                </Card>
            </div>
        )
    }
}

export default Form.create()(Order)