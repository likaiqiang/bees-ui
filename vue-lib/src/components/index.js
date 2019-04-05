import Icon from './icon/index'
import Button from './button/index'
import DatePicker from './datePicker/index'
import Input from './input/index'
import {Steps,Step} from './steps/index'

import Switch from './switch/index'
import RadioGroup from './radio-group/index'
import Checkbox from './checkbox/index'
import CheckboxGroup from './checkbox-group/index'


import Select from './select/index'
import {Tabs,TabPane} from './tabs/index'
import Table from './table/index'
import Dialog from './dialog/index'
import Loading from './loading/index'
import Tag from './tag/index'

import Tooltip from './tooltip/index'
import Slider from './slider/index'
import Pagination from './pagination/index'
import {Swiper,SwiperItem} from './swiper/index' 
import Breadcrumb from './breadcrumb/index.js'

import portal from '@/directives/portal.js'
import ClickOutside from "@/directives/clickoutside.js";
import loading from '@/components/loading/src/directive.js'
import dialog from '@/components/dialog/src/dialog.js'
import message from '@/components/message/index.js'
import circle from '@/components/circle/index.js'
import progress from '@/components/progress/index.js'
import upload from '@/components/upload/index.js'
import "@/styles/index.scss";

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
  Loading,
  Table,
  Dialog,
  Tooltip,
  Slider,
  Pagination,
  Swiper,
  SwiperItem,
  Tag,
  Input,
  Steps,
  Step,
  circle,
  progress,
  upload
}

export const install = (Vue,ops={})=>{
  Object.values(components).forEach(value => {
    Vue.component(value.name,value);
  })
  Vue.directive('dom-portal',portal)
  Vue.directive('click-outside',ClickOutside)
  Vue.directive('loading',loading)
  Vue.prototype.$Modal = dialog
  Vue.prototype.$Message = message()
}
export default components