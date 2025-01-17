/*
 *
 *  Licensed to the Apache Software Foundation (ASF) under one or more
 *  contributor license agreements.  See the NOTICE file distributed with
 *  this work for additional information regarding copyright ownership.
 *  The ASF licenses this file to You under the Apache License, Version 2.0
 *  (the "License"); you may not use this file except in compliance with
 *  the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */


import {Typography,Divider} from 'antd';
import React from 'react';
import {connect} from 'umi';
import {StateType} from '@/pages/DataStudio/model';
import {Scrollbars} from 'react-custom-scrollbars';
import { history,useIntl } from 'umi';

const {Title, Paragraph,Link, Text} = Typography;

const StudioGuide = (props: any) => {
  const intl = useIntl();
  const {toolHeight} = props;

  return (
    <Scrollbars style={{height: toolHeight}}>
      <Typography style={{padding:'15px'}}>
        <Title level={5}>{intl.formatMessage({id: 'pages.datastadio.lable.quickguide', defaultMessage: '快捷引导',})}</Title>
        <Paragraph>
          <ul>
            <li>
              <Link onClick={()=>{history.push('/registration/cluster/clusterInstance')}}>{intl.formatMessage({id: 'pages.datastadio.lable.registcluster', defaultMessage: '注册集群实例',})}</Link>
            </li>
            <li>
              <Link onClick={()=>{history.push('/registration/cluster/clusterConfiguration')}}>{intl.formatMessage({id: 'pages.datastadio.lable.registclusterconfig', defaultMessage: '注册集群配置',})}</Link>
            </li>
            <li>
              <Link onClick={()=>{history.push('/registration/jar')}}>{intl.formatMessage({id: 'pages.datastadio.lable.registjar', defaultMessage: '注册 Jar',})}</Link>
            </li>
            <li>
              <Link onClick={()=>{history.push('/registration/database')}}>{intl.formatMessage({id: 'pages.datastadio.lable.registdatasource', defaultMessage: '注册数据源',})}</Link>
            </li>
            <li>
              <Link onClick={()=>{history.push('/registration/document')}}>{intl.formatMessage({id: 'pages.datastadio.lable.registdocument', defaultMessage: '注册文档',})}</Link>
            </li>
            <li>
              <Link onClick={()=>{history.push('/settings')}}>{intl.formatMessage({id: 'pages.datastadio.lable.configsystemconfig', defaultMessage: '修改系统配置',})}</Link>
            </li>
            <li>
              <Link href="http://www.dlink.top/" target="_blank" >{intl.formatMessage({id: 'pages.datastadio.lable.officialdocumentation', defaultMessage: '官网文档',})}</Link>
            </li>
            <li>
              <Link href="https://github.com/DataLinkDC/dlink" target="_blank" >Github</Link>
            </li>
          </ul>
        </Paragraph>
      </Typography>
    </Scrollbars>
  );
};

export default connect(({Studio}: { Studio: StateType }) => ({
  current: Studio.current,
  sql: Studio.sql,
  tabs: Studio.tabs,
  toolHeight: Studio.toolHeight,
}))(StudioGuide);
