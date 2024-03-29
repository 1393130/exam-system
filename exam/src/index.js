import dva from 'dva';
import './index.css';
import { message } from 'antd';
import createLoading from 'dva-loading';
// 1. Initialize
const app = dva(createLoading());
// 2. Plugins
app.use({
    // onAction: createLogger(),
    onError: (e) => {
        message.error(e.message, /* duration */3);
    }
});

// 3. Models
//获取试题分类的数据
app.model(require('./models/ClassifyQuestions').default);
//添加试题分类的数据
app.model(require('./models/Addclassify').default)
app.model(require('./models/login').default);   //登录
app.model(require('./models/getExamType').default);//获取考试类型
app.model(require('./models/getSubject').default);//获取课程类型
app.model(require('./models/getTopicType').default);//获取题目类型
app.model(require('./models/getUserInfo').default);//获取用户信息
app.model(require('./models/addQuestion').default);//添加试题
app.model(require('./models/getCheckQuestion').default);//筛选数据
app.model(require('./models/editQuestion').default);//修改试题数据
app.model(require('./models/AllCheckQuestion').default);//获取所有试题
app.model(require('./models/userDisplay').default);//用户展示
app.model(require('./models/AddUser').default);//添加用户
app.model(require('./models/Eaxmination').default);//试卷列表
app.model(require('./models/StudentMange').default);//学生管理
app.model(require('./models/AddExam').default);//添加考试
app.model(require('./models/ClassManage').default);//班级管理
app.model(require('./models/global').default);//国际化配置
app.model(require('./models/MarkManage').default);//获取学生试卷列表
app.model(require('./models/upUserInfo').default);//更新用户数据


// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
