<template>
    <div>
        <el-row justify="center">
            <el-col :span="14">
                <div class="grid-content bg-purple-dark lhy">
                    <el-icon :size="15">
                        <ChatDotRound/>
                    </el-icon>
                    &nbsp;新建项目
                </div>
            </el-col>
        </el-row>

    </div>
    <div class="form-wrapper">
        <el-form :model="form" label-width="120px">
            <el-form-item label="项目编号：">
                <el-select v-model="form.region" placeholder="please select your zone" class="pronum">
                    <el-option label="Zone one" value="shanghai"/>
                    <el-option label="Zone two" value="beijing"/>
                </el-select>
            </el-form-item>

            <el-form-item label="项目名称：">
                <el-input v-model="form.name"/>
            </el-form-item>
            <el-form-item label="系统名称：">
                <el-input v-model="form.name"/>
            </el-form-item>
            <el-form-item label="被测单位名称：">
                <el-input v-model="form.name"/>
            </el-form-item>
            <el-form-item label="项目密码：">
                <el-input v-model="form.name"/>
            </el-form-item>
            <el-form-item label="确认密码：">
                <el-input v-model="form.name"/>
            </el-form-item>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="作业指导书：">
                        <el-select class="pronum" v-model="form.region" placeholder="please select your zone">
                            <el-option label="Zone one" value="shanghai"/>
                            <el-option label="Zone two" value="beijing"/>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="备案证明：">
                        <el-input v-model="form.name"/>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="标准体系：">
                        <el-select class="pronum" v-model="form.region" placeholder="please select your zone">
                            <el-option label="Zone one" value="shanghai"/>
                            <el-option label="Zone two" value="beijing"/>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="标准版本：">
                        <el-select class="pronum" v-model="form.region" placeholder="please select your zone">
                            <el-option label="Zone one" value="shanghai"/>
                            <el-option label="Zone two" value="beijing"/>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="保护等级：">
                        <el-row :gutter="2">
                            <el-col :span="12">
                                <el-select v-model="form.region" placeholder="eeee">
                                    <el-option label="Zone one" value="shanghai"/>
                                    <el-option label="Zone two" value="beijing"/>
                                </el-select>
                            </el-col>

                            <el-col :span="12">
                                <el-select v-model="form.region" placeholder="4444">
                                    <el-option label="Zone one" value="shanghai"/>
                                    <el-option label="Zone two" value="beijing"/>
                                </el-select>
                            </el-col>
                        </el-row>

                    </el-form-item>
                </el-col>

                <el-col :span="12">
                    <el-form-item label="项目类型：">
                        <el-select v-model="form.region" placeholder="please select your zone" class="pronum">
                            <el-option label="Zone one" value="shanghai"/>
                            <el-option label="Zone two" value="beijing"/>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-form-item label="扩展标准：">
                <el-select class="lhydnb pronum" v-model="form.region" placeholder="please select your zone"
                           :popper-append-to-body="false">
                    <el-option label="Zone one" value="shanghai"/>
                    <el-option label="Zone two" value="beijing"/>
                </el-select>
            </el-form-item>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="部门：">
                        <el-select class="pronum" v-model="form.region" placeholder="please select your zone">
                            <el-option label="Zone one" value="shanghai"/>
                            <el-option label="Zone two" value="beijing"/>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="项目组长：">
                        <el-select class="pronum" v-model="form.region" placeholder="please select your zone">
                            <el-option label="Zone one" value="shanghai"/>
                            <el-option label="Zone two" value="beijing"/>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="12">
                    <el-form-item>
                        <el-button class="GradualColor"
                                   type="primary">创建项目
                        </el-button>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item>
                        <el-button class="GradualColor"
                                   type="primary">取消
                        </el-button>
                    </el-form-item>
                </el-col>


            </el-row>

        </el-form>
    </div>
</template>


<script setup>
    import {ChatDotRound} from '@element-plus/icons-vue'
    import {reactive} from 'vue'

    const form = reactive({})


</script>
<style scoped>
    .lhy {
        margin-bottom: 20px;
        background: #4063a9;
        color: white;
        font-size: 12px;
        padding: 10px 10px;
        display: flex;
        align-items: center;
    }

    .form-wrapper {
        width: 49vw;
        margin: auto;

    }

    .pronum {
        width: 100%;
    }

    .prolevel {
        margin-left: 18px;

    }

    .lhydnb .el-input__wrapper {
        border: 1px solid #8c8c8c;
        background: linear-gradient(to bottom, #eee 45%, #ddd 0, #bbb);
        paddind-bottom: 0;

    }

    .lhydnb {


        border-radius: 5px;
    }

    .GradualColor {
        width: 100%;
        background: linear-gradient(to bottom, #4582f6, #79c0ed)
    }


</style>

