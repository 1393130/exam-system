import AddQuestions from '../pages/exam/QuestionManagement/AddQuestions/AddQuestions'
export default {
    routes: [
        {
            name:'router.questions',
            path:'',
            children:[
                {
                    name:'router.questions.add',
                    path:'/home/addquestion',
                    view_id:'main-addQuestions',
                    component:AddQuestions
                }
            ]
        }
    ]
}