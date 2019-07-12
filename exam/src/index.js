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


// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
