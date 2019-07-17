import React , {useState,useEffect} from 'react';
import { connect } from 'dva';
import styles from './AddUsers.scss'
import { Form } from 'antd';
import Adduser from './adduser'
import AddRank from './addRank'
import AddApiJurisdiction from './addApiJurisdiction'
import AddAttempt from './addAttempt'
import RankSetApi from './RankSetApi'
import RankSetView from './RankSetView'
import {injectIntl} from 'react-intl';
function AddUser(props) {
    return (
        <div className={styles.AddUser_wrap}>
           <div className={styles.AddUser_title}>
               <h2>{props.intl.formatMessage({id: 'router.UserManage.adduser'})}</h2>
           </div>
           <div className={styles.AddUser_cont}>
               <div className={styles.AddUser_user}>
                   <Adduser></Adduser>
                   <AddRank></AddRank>
                   <AddApiJurisdiction></AddApiJurisdiction>
                   <AddAttempt></AddAttempt>
                   <RankSetApi></RankSetApi>
                   <RankSetView></RankSetView>
               </div>
           </div>
        </div>
    );
}

AddUser.propTypes = {
};

export default injectIntl(connect()(Form.create()(AddUser)));
