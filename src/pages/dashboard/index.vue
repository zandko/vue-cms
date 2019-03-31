<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card class="box-card" :body-style="{padding: '0px', backgroundColor: '#00c0ef'}">
          <div class="inner">
            <span class="num">{{ article.num }}</span>
            <p>{{ article.name}}</p>
          </div>
          <router-link to="/example" class="small-box-footer">
            查看所有
            <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
          </router-link>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card" :body-style="{padding: '0px', backgroundColor: '#00a65a'}">
          <div class="inner">
            <span class="num">{{ comment.num}}</span>
            <p>{{ comment.name }}</p>
          </div>
          <router-link to="/" class="small-box-footer">
            查看所有
            <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
          </router-link>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card" :body-style="{padding: '0px', backgroundColor: '#f39c12'}">
          <div class="inner">
            <span class="num">{{ user.num }}</span>
            <p>{{ user.name }}</p>
          </div>
          <router-link to="/" class="small-box-footer">
            查看所有
            <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
          </router-link>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card" :body-style="{padding: '0px', backgroundColor: '#dd4b39'}">
          <div class="inner">
            <span class="num">{{ date.num }}</span>
            <p>{{ date.name }}</p>
          </div>
          <router-link to="/" class="small-box-footer">
            {{ date.dateTime }}
            <i class="fa fa-star" aria-hidden="true"></i>
          </router-link>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-card class="box-card introduction" :body-style="{padding: '10px', backgroundColor: '#f2f2f2'}">
          本模板基于Vue2.*实现。vue后台管理模版（添加时请注明来源，如：“码云”、“github”等）
          郑重提示：本模版作为学习交流免费使用【强烈要求付费或者捐赠的我也就默默的接受了😄】，如需用作商业用途，请联系作者购买【本模版已进行作品版权证明，不管以何种形式获取的源码，请勿进行出售或者上传到任何素材网站，否则将追究相应的责任】
          注：本模版未引入任何第三方组件，单纯的vue+element实现的各种功能。网站所有数据均为静态数据，无数据库，除打开的窗口和部分小改动外所有操作刷新后无效，关闭窗口或清除缓存后，所有操作无效，请知悉。
          PS：这只是模版而不是定制开发，不能覆盖升级很正常，请不要因为不能覆盖升级来喷我，我表示很无辜，谢谢大家
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="15" class="charts">
        <Charts></Charts>
      </el-col>
      <el-col :span="9">
        <Timeline></Timeline>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Charts from "@/components/Charts";
import Timeline from "@/components/Timeline";
export default {
  components: {
    Charts,Timeline
  },
  data() {
    return {
      article: {
        num: 20,
        name: "文章"
      },
      user: {
        num: 123,
        name: "用户"
      },
      comment: {
        num: 22,
        name: "评论"
      },
      date: {
        num: 3,
        dateTime: "2019-04-01",
        name: "成立天数"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.box-card {
  text-align: center;
}

.introduction {
  text-align: left;
  margin-top: 20px;
  margin-bottom: 20px;
}

.charts {
  margin-top: 100px;
}

.inner {
  color: #fff;
  text-align: left;
  padding: 20px;
  box-sizing: border-box;
}

.num {
  font-size: 30px;
  font-weight: 700;
}

.small-box-footer {
  display: block;
  text-decoration: none;
  text-align: center;
  width: 100%;
  height: 26px;
  line-height: 26px;
  color: rgba(255, 255, 255, 0.8);
  background-color: rgba(0, 0, 0, 0.1) !important;
}
</style>