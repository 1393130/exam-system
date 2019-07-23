# exam-system
>考试系统管理  项目是基于 dva+Hooks+Axios+Redux-saga+React-router

## EasyMarket Screenshots

|       考试系统管理     |       添加试题     |       试题分类     |       查看试题     |
| :------------------: | :------------------: | :------------------: | :------------------: |
| ![](./exam/imgs/193859709A6644C8D6E698B55FF420E4.jpg) | ![](./exam/imgs/7BEAB529-CFD1-44DF-96EA-D982F3F70258.png) | ![](./exam/imgs/10B75EA2-0F24-48C5-AAE2-9B9F359DE6E7.png) | ![](./exam/imgs/772FDC6F-521F-4E7A-880D-4324E97A162B.png) |

|       添加用户     |       用户展示     |
| :------------------: | :------------------: |
| ![](./exam/imgs/B44BE180-C96B-4FCF-9734-A28BFB96FDCF.png) | ![](./exam/imgs/E546CE6E-5204-4E6E-BAC2-9B7D2673D100.png) |

|       添加考试     |       试卷列表     |
| :------------------: | :------------------: |
| ![](./exam/imgs/34CC2DFB-264C-4B2E-83EE-EB55D1901F04.png) | ![](./exam/imgs/39CA1F93-55F6-47D1-98B9-33B092738CC3.png) |

|       班级管理     |       教室管理     |       学生管理     |
| :------------------: | :------------------: | :------------------: |
| ![](./exam/imgs/17D5A366-6D40-4B9A-951B-8B4728709F88.png) | ![](./exam/imgs/1A54C422-2D57-4D94-A5AD-F60C97AA5728.png) | ![](./exam/imgs/DF55AA61-520B-4D47-B507-39C0014AF47F.png) |

|       待批班级     |
| :------------------: |
| ![](./exam/imgs/7A4BCCFC-2AC8-484F-902F-983B93E22A23.png) |

## 部署
> 1. git clone git@github.com:zhangxin0723/exam-system.git
> 2. 安装依赖 cnpm install / npm install
> 3. 修改 utils 文件中 service 字段的值 = (http://169.254.12.198:7001/)
> 4. npm start

## Complicated Description

> 1.根据考试的内容添加考试的题目,在添加考试的时候可以多个选择考试内容要求,根据不同的班级分发不同的考试内容,
> 2.登录之后会在cookies面存储一个Token值 时限为2个小时
> 3.根据分发试卷的时间到时间会自动提交,管理人员看见班级的人员试卷进行批卷
考试系统管理
应用技术 dva框架+redux.saga+Hooks

<figure>
    <img src="./imgs/addQuestions.png" />
    <img src="./imgs/checkQuestions.png" />
    <img src="./imgs/userDisplay.png" />
    <img src="./imgs/addExam.png" />
    <img src='./imgs/addExamDetail.png' />
    <img src='./imgs/addClass.png' />
    <img src='./imgs/editClass.png' />
    <img src='./imgs/addClassroom.png' />
    <img src='./imgs/delClassroom.png' />
</figure>
