import dynamic from 'dva/dynamic';
//试题管理
const AddQuestion = dynamic({
    component: () => import('../pages/exam/QuestionManagement/AddQuestions/AddQuestions'),
});
const ClassifyQuestion = dynamic({
    component: () => import('../pages/exam/QuestionManagement/ClassifyQuestions/ClassifyQuestions'),
});
const CheckQuestion = dynamic({
    component: () => import('../pages/exam/QuestionManagement/CheckQuestions/CheckQuestions'),
});
//用户管理
const AddUser = dynamic({
    component: () => import('../pages/exam/UserManagement/AddUsers/AddUsers'),
});
const UserDisplay = dynamic({
    component: () => import('../pages/exam/UserManagement/UserDisplay/UserDisplay'),
});
//考试管理
const AddExam = dynamic({
    component: () => import('../pages/exam/ExamManagement/AddExam/AddExam'),
});
const ExamList = dynamic({
    component: () => import('../pages/exam/ExamManagement/ExamLists/ExamLists'),
});
//班级管理
const ClassMange = dynamic({
    component: () => import('../pages/exam/ClassManagement/ClassManage/ClassManage'),
});
const ClassroomManage = dynamic({
    component: () => import('../pages/exam/ClassManagement/ClassroomManage/ClassroomManage'),
});
const StudentManage = dynamic({
    component: () => import('../pages/exam/ClassManagement/StudentManage/StudentManage'),
});
//阅卷管理
const MarkManage = dynamic({
    component: () => import('../pages/exam/MarkManagement/MarkManage'),
});
//查看试题的详情
const QuestionDetail = dynamic({
    component: () => import('@/pages/exam/detail/QuestionDetail'),
});
//编辑试题详情
const editDetail = dynamic({
    component: () => import('@/pages/exam/detail/editDetail'),
});
//创建试卷
const Add_Exam = dynamic({
    component: () => import('@/pages/exam/ExamManagement/AddExam/Add_Exam'),
});
//试卷详情
const BatchList = dynamic({
    component: () => import('../pages/exam/detail/ExamListDetail'),
});
//批卷
const ExamListDetail = dynamic({
    component: () => import('../pages/exam/MarkManagement/batchList'),
});
//学生批卷详情
const BatchDetail = dynamic({
    component: () => import('../pages/exam/detail/BatchDetail'),
});
export default{
    routes:[
        {
            name:'router.questions',
            path:'',
            children:[
                {
                    name:'router.questions.add',
                    path:'/home/addquestion',
                    view_id:'main-addQuestions',
                    component:AddQuestion
                },{
                    name:'router.questions.type',
                    path:'/home/classifyquestion',
                    view_id:'main-questionsType',
                    component:ClassifyQuestion
                },{
                    name:'router.questions.view',
                    path:'/home/checkquestion',
                    view_id:'main-watchQuestions',
                    component:CheckQuestion
                },{
                    name:'questions.view.detail',
                    path:'/home/QuestionDetail/:id',
                    view_id:'main-questionsDetail',
                    component:QuestionDetail,
                    flag:false
                },{
                    name:'questions.view.edit',
                    path:'/home/editDetail/:id',
                    view_id:'main-editQuestions',
                    component:editDetail,
                    flag:false
                }
            ]
        },{
            name:'router.UserManage',
            path:'',
            children:[
                {
                    name:'router.UserManage.adduser',
                    path:'/home/adduser',
                    view_id:'main-addUser',
                    component:AddUser
                },{
                    name:'router.UserManage.userdisplay',
                    path:'/home/userdisplay',
                    view_id:'main-showUser',
                    component:UserDisplay
                }
            ]
        },{
            name:"router.ExamManage",
            path:'',
            children:[
                {
                    name:"router.ExamManage.addexam",
                    path:'/home/addexam',
                    view_id:'main-addExam',
                    component:AddExam
                },{
                    name:"router.ExamManage.examlist",
                    path:'/home/examlist',
                    view_id:'main-examList',
                    component:ExamList
                },{
                    name:"ExamManage.addexam.examEdit",
                    path:'/home/creatExam',
                    view_id:'main-examEdit',
                    component:Add_Exam,
                    flag:false
                },{
                    name:"ExamManage.addexam.examEditDetail",
                    path:'/home/ExamListDetail/:id',
                    view_id:'main-examDetail',
                    component:ExamListDetail,
                    flag:false
                }
            ]
        },{
            name:'router.ClassManage',
            path:'',
            children:[
                {
                    name:"router.ClassManage.classmanage",
                    path:'/home/classmanage',
                    view_id:'main-grade',
                    component:ClassMange
                },{
                    name:"router.ClassManage.classroommanage",
                    path:'/home/classroommanage',
                    view_id:'main-room',
                    component:ClassroomManage
                },{
                    name:"router.ClassManage.studentmanage",
                    path:'/home/studentmanage',
                    view_id:'main-student',
                    component:StudentManage
                },
            ]
        },{
            name:'router.MarkManage',
            path:'',
            children:[
                {
                    name:'router.MarkManage.markmanage',
                    path:"/home/markmanage",
                    view_id:'main-examinationPapers',
                    component:MarkManage
                },{
                    name:'MarkManage.markmanage.ClassList',
                    path:"/home/batchList",
                    view_id:'main-examPaperClassList',
                    component:BatchList,
                    flag:false
                },{
                    name:'MarkManage.markmanage.ClassListMate',
                    path:"/home/BatchDetail",
                    view_id:'main-examPaperClassmate',
                    component:BatchDetail,
                    flag:false
                }
            ]
        }
    ]
}