<template>
    <div class="liushixiong">
        <el-row justify="center">
            <el-col>
                <div class="wrapper">
                    <div class="grid-content bg-purple-dark pagetwo_title">
                        <el-icon :size="25">
                            <ChatLineSquare/>
                        </el-icon>
                        欢迎使用测评能手软件
                    </div>
                    <div class="wrapper-right">
                        <div class="items-left">
                            <span class="text-top">
                                图说等级保护测评
                            </span>
                            <div class="text-bottom">
                                Illustration evaluation
                            </div>
                        </div>
                        <div class="items-right">
                            <div class="text-top">
                                远程渗透漏洞审计
                            </div>
                            <div class="text-bottom">
                                Vulnerability audit
                            </div>
                        </div>

                    </div>


                </div>
            </el-col>
        </el-row>
        <el-row justify="center">
            <el-col>
                <div class="wrapper-menu">
                    <div class="grid-content bg-purple-dark pagetwo_menu">
                        李海燕
                    </div>
                    <div class="nav-items">
                        <div :class="[index==1? 'selected nav-first':'nav-item']"
                             @click="selected(1)">
                            <span class="nav-font">
                                01 项目概述
                            </span>
                        </div>
                        <div :class="[index==2? 'selected':'nav-item']" @click="selected(2)">
                            <span class="nav-font">
                                02 系统构成
                            </span>
                        </div>
                        <div :class="[index==3? 'selected':'nav-item']" @click="selected(3)">
                            <span class="nav-font">
                                03 现场核查
                            </span></div>
                        <div :class="[index==4? 'selected':'nav-item']" @click="selected(4)">
                            <span class="nav-font">
                                04 整体测评
                            </span></div>
                        <div :class="[index==5? 'selected':'nav-item']" @click="selected(5)">
                            <span class="nav-font">05 风险分析和评价</span>
                        </div>
                        <div :class="[index==6? 'selected':'nav-item']" @click="selected(6)">
                            <span class="nav-font">
                                06 总体评价
                            </span>
                        </div>
                    </div>
                    <div class="button-right">
                        <div class="grid-content bg-purple-dark">
                            <el-icon :size="35" color="#50C1FF">
                                <Tickets/>
                            </el-icon>
                        </div>
                        <div class="grid-content bg-purple-dark icon-end">
                            <el-icon :size="35" color="#50C1FF">
                                <Document/>
                            </el-icon>
                        </div>
                    </div>


                </div>
            </el-col>


        </el-row>
        <MainContent>

        </MainContent>

    </div>

</template>

<script setup>
    import {ChatLineSquare, Tickets, Document} from '@element-plus/icons-vue'
    import {ref} from 'vue'
    import MainContent from "@/components/MainContent";

    let index = ref(1)
    const selected = (val) => {
        index.value = val
    }

</script>

<style scoped>
    .liushixiong {
        margin: 0 auto;
        width: 60%;
        min-width: 1000px;
        max-width: 1600px;
    }

    .pagetwo_title {
        /*margin-bottom: 25px;*/
        color: white;
        font-size: 1.2rem;
        font-family: 宋体;
        letter-spacing: 2px;
        padding: 15px 15px;
        display: flex;
        align-items: center;
    }

    .pagetwo_menu {
        color: #50C1FF;
        font-size: 14px;
        font-family: 宋体;
        font-weight: 900;
        padding: 15px 7px;
    }

    .pagetwo_title > .el-icon {
        margin-right: 10px;
        box-shadow: 4px 0px 21px 3px rgba(0, 0, 0, 0.5);
    }

    .wrapper {
        background: #4063a9;
        display: flex;
        justify-content: space-between;
        align-items: center;

    }

    .wrapper-menu {
        background: linear-gradient(#FFFFFF 60%, #DBF0FB);
        display: flex;
        /*justify-content: space-between;*/
        align-items: center;
        height: 68px;


    }

    .wrapper-right {
        display: flex;
        margin-right: 40px;
    }

    .items-left, .items-right {
        padding: 5px 5px;
        background-color: #e09433;
        border-radius: 2px;
        text-align: center;


    }

    .items-right {
        background-color: #cbc33d;
        margin-left: 10px;
    }


    .text-top {
        font-size: 14px;
        background-color: #eeeeee;
        text-align: center;
        color: #e09433;
        letter-spacing: 2px;
        padding: 0 5px;

    }

    .text-bottom {
        font-size: 12px;
        transform: scale(.8);
        color: #eeeeee;
        letter-spacing: 2px;
    }

    .items-right .text-top {
        background-color: #000;
        color: #cbc33d;

    }

    .items-right .text-bottom {
        color: #000;

    }

    .pagetwo_menu {
        width: 79px;
    }

    .nav-items {
        flex-grow: 1;
        display: flex;
        margin-bottom: 6px;
        overflow-y: hidden;
    }

    .nav-item {
        background: #50C1FF;
        position: relative;
        height: 35px;
        font-size: 12px;
        color: #FFFFFF;
        line-height: 35px;
        text-indent: 15px;
        padding-left: 20px;
    }

    .selected {
        background: #e09433;
        position: relative;
        height: 35px;
        font-size: 12px;
        color: #FFFFFF;
        line-height: 35px;
        text-indent: 15px;
        padding-left: 20px;
    }

    .nav-item:first-child {
        padding-left: 0;

    }

    .nav-item::after {
        position: absolute;
        top: 0px;
        right: -20px;
        z-index: 100;
        content: '';
        background-color: #50C1FF;

        display: block;
        height: 35px;
        width: 35px;
        transform: rotate(45deg);
        border-top: solid 1px #FFFFFF;
        border-right: solid 1px #FFFFFF;

    }

    .selected::after {
        position: absolute;
        top: 0px;
        right: -20px;
        z-index: 100;
        content: '';
        background-color: #e09433;
        /*background: linear-gradient(45deg, transparent 0%, #50C1FF);*/
        display: block;
        height: 35px;
        width: 35px;
        transform: rotate(45deg);
        border-top: solid 1px #FFFFFF;
        border-right: solid 1px #FFFFFF;

    }

    .button-right {
        width: 150px;
        display: flex;
        justify-content: flex-end;
    }

    .last-item::after {
        content: '';
        display: block;
        height: 0px;
        width: 0px;
        border: 20px solid #50C1FF;
        border-right: transparent 20px solid;
        border-top: transparent 20px solid;
        border-bottom: transparent 20px solid;
        transform: rotate(360deg);
        right: -40px;
        top: -2px;

    }

    .last-item {
        width: 110px;
    }

    .icon-end {
        margin: 0 10px;
    }

    .nav-font {
        position: relative;
        z-index: 9999;
    }

    .nav-first {
        padding-left: 0;
    }


</style>