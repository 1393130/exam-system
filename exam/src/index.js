import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/login').default);
//获取试题分类的数据
app.model(require('./models/ClassifyQuestions').default);
//添加试题分类的数据
app.model(require('./models/Addclassify').default)
// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
