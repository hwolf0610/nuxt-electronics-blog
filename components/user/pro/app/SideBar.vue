<template>
    <div class="right-bar fixed bg-white shadow">
        <component v-bind:is="currentMenu"></component>
    </div>
</template>
<script>
import WebViewerSetting from './WebViewerSetting'
import LayersSetting from './LayersSetting'
import TimePickerSetting from './TimePickerSetting'
import TextBoxSetting from './TextBoxSetting'
import SpinnerSetting from './SpinnerSetting'
import PasswordTextBoxSetting from './PasswordTextBoxSetting'
import NotifierSetting from './NotifierSetting'
import ListViewSetting from './ListViewSetting'
import ListPickerSetting from './ListPickerSetting'
import LabelSetting from './LabelSetting'
import ImageSetting from './ImageSetting'
import DatePickerSetting from './DatePickerSetting'
import CheckBoxSetting from './CheckBoxSetting'
import ButtonSetting from './ButtonSetting'
import SliderSetting from './SliderSetting'
import { mapState } from 'vuex'
export default {
    components: {
        WebViewerSetting,
        LayersSetting,
        TimePickerSetting,
        TextBoxSetting,
        SpinnerSetting,
        PasswordTextBoxSetting,
        NotifierSetting,
        ListViewSetting,
        ListPickerSetting,
        LabelSetting,
        ImageSetting,
        DatePickerSetting,
        CheckBoxSetting,
        ButtonSetting,
        SliderSetting
    },
    computed:{
        ...mapState({
            currentMenu: state=> state.appMenu.currentMenu
        })
    }
}
</script>
<style scoped>
.green-btn{
    background:#03be33;
  }
  .right-bar{
      overflow-y: auto;
  }
</style>
