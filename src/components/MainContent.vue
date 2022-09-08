<template>
    <el-row justify="center">
        <el-col>
            <div class="main">
                <div class="main-left">
                    <div class="main-logo">
                        <div class="icon-border">
                            <span class="iconfont icon-huiyiguanli">
                            </span>
                        </div>
                        <div class="meeting-room">
                            <div class="meeting">
                                会议室
                            </div>
                            <div>
                                Meeting room
                            </div>
                        </div>
                    </div>
                    <div class="text-list " v-for="(v,i) in list" :key="i">
                        <div class="text-title">{{v.title}}</div>
                        <div>{{v.text}}</div>
                    </div>

                </div>

                <div class="main-right">
                    <div class="project-wrapper">
                        项目概述
                    </div>
                    <div class="cell-items">
                        <div class="cell-item" v-for="(item,index) in cellList" :key="index">{{item}}</div>
                    </div>
                    <div class="box-shadow">

                    </div>
                </div>
            </div>

        </el-col>
    </el-row>
</template>

<script setup>
    import {ref} from 'vue'

    const list = ref([
        {title: '【项目编号】', text: 'LISSDJCP20220201'},
        {title: '【项目名称】', text: 'LISSDJCP20220201'},
        {title: '【系统名称】', text: 'LISSDJCP20220201'},
        {title: '【定级组合】', text: 'LISSDJCP20220201'},
        {title: '【行业类型】', text: 'LISSDJCP20220201'},
        {title: '【备案编号】', text: 'LISSDJCP20220201'},
        {title: '【委托单位】', text: 'LISSDJCP20220201'},
    ])
    const cellList = ref([
        '测评重点', '测评目的和依据', '测评过程', '承载的业务情况',
        '网络结构', '测评工具及接入点说明', '安全服务',
        '安全环境', '测评对象选择方法'
    ])


</script>

<style scoped>
    .main {
        display: flex;
    }

    .main-l eft {
        flex: 0 0 20%;

    }

    .main-right {
        flex: 1;
        background-color: #FFFFFF;
    }

    .icon-huiyiguanli {
        font-size: 35px;
        border: 1px solid #FFFFFF;
        padding: 5px 15px;
    }

    .main-logo {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        /*margin: 10px 0;*/
        color: #FFFFFF;
        background: linear-gradient(133deg, #595B5C 30%, #9A9B9F);
    }

    .icon-border {
        transform: translateX(-13px);

    }

    .meeting-room {
        text-align-last: justify;
        transform: translateX(10px);
        min-width: 112px;

    }

    .meeting {
        font-size: 25px;
        /*font-family: 微软雅黑;*/
    }

    .text-list {
        display: flex;
        font-size: 12px;
        margin: 8px 0;


    }

    .text-title {
        color: #50C1FF;
        margin: 0 15px 0 5px;
    }

    .project-wrapper {
        color: #50C1FF;
        font-size: 24px;
        padding: 15px 10px;
        font-weight: 600;
    }

    .cell-items {
        display: flex;
        align-items: center;
        height: 20px;
        padding: 0 10px;
        font-size: 12px;


    }

    .cell-item {
        border: 1px solid #E1E1E1;
        padding: 2px 6px;
        background: #F0F0F0;
        font-weight: 600;
    }

    .box-shadow {
        background: #ABABAB;
        border: 2px solid #FFFFFF;
        padding: 2px;
        width: 100%;
        height: 150px;
        box-shadow: 3px 3px 2px 2px inset #757575;


    }


</style>