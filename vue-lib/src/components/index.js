import Icon from './icon/index'
import Button from './button/index'
import DatePicker from './datePicker/index'

import Switch from './switch/index'
import RadioGroup from './radio-group/index'
import Checkbox from './checkbox/index'
import CheckboxGroup from './checkbox-group/index'


import Select from './select/index'
import {Tabs,TabPane} from './tabs/index'
import Table from './table/index'
import {Dialog,dialog} from './dialog/index'
import Loading from './loading/index'

import Message from './message/index' //
import Tooltip from './tooltip/index'
import Slider from './slider/index'
import Pagination from './pagination/index'
import {Swiper,SwiperItem} from './swiper/index' 


const components = {
  Icon,
  Button,
  DatePicker,
  Switch,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Select,
  Tabs,
  TabPane,
  Table,
  Dialog,
  Loading,
  Tooltip,
  Slider,
  Pagination,
  SwiperItem,
  Swiper
}

const install = (Vue,ops={})=>{
  Object.values(components).forEach(value => {
    Vue.component(value.name,value);
  })
}
const API = {
  ...components,
  install
};

export default API