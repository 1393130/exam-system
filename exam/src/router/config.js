//试题管理
import AddQuestion from '../pages/exam/QuestionManagement/AddQuestions/AddQuestions'
import ClassifyQuestion from '../pages/exam/QuestionManagement/ClassifyQuestions/ClassifyQuestions'
import CheckQuestion from '../pages/exam/QuestionManagement/CheckQuestions/CheckQuestions'
//用户管理
import AddUser from '../pages/exam/UserManagement/AddUsers/AddUsers'
import UserDisplay from '../pages/exam/UserManagement/UserDisplay/UserDisplay'
//考试管理
import AddExam from '../pages/exam/ExamManagement/AddExam/AddExam'
import ExamList from '../pages/exam/ExamManagement/ExamLists/ExamLists'
//班级管理
import ClassMange from '../pages/exam/ClassManagement/ClassManage/ClassManage'
import ClassroomManage from '../pages/exam/ClassManagement/ClassroomManage/ClassroomManage'
import StudentManage from '../pages/exam/ClassManagement/StudentManage/StudentManage'
//阅卷管理
import MarkManage from '../pages/exam/MarkManagement/MarkManage'

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
                }
            ]
        }
    ]
}