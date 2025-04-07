'use client';

import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer, Font } from '@react-pdf/renderer';

// 注册中文字体
Font.register({
  family: 'Noto Serif SC',
  fonts: [
    { src: 'https://cdn.jsdelivr.net/fontsource/fonts/noto-serif-sc@latest/chinese-simplified-400-normal.ttf', fontWeight: 400, fontStyle: 'normal' },
    { src: 'https://cdn.jsdelivr.net/fontsource/fonts/noto-serif-sc@latest/chinese-simplified-400-normal.ttf', fontWeight: 400, fontStyle: 'italic' },
    { src: 'https://cdn.jsdelivr.net/fontsource/fonts/noto-serif-sc@latest/chinese-simplified-700-normal.ttf', fontWeight: 700, fontStyle: 'normal' },
    { src: 'https://cdn.jsdelivr.net/fontsource/fonts/noto-serif-sc@latest/chinese-simplified-700-normal.ttf', fontWeight: 700, fontStyle: 'italic' }
  ]
});

Font.register({
  family: 'Noto Serif SC Bold',
  src: 'https://cdn.jsdelivr.net/fontsource/fonts/noto-serif-sc@latest/chinese-simplified-700-normal.ttf'
});

// 定义样式
const styles = StyleSheet.create({
  viewer: {
    width: '100%',
    height: '80vh',
  },
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 35,
    fontFamily: 'Noto Serif SC',
    color: '#333333',
  },
  header: {
    marginBottom: 15,
    flexDirection: 'column',
    borderBottom: '2px solid #3B82F6',
    paddingBottom: 10,
    position: 'relative',
  },
  headerDecoration: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 120,
    height: 4,
    backgroundColor: '#3B82F6',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 5,
  },
  nameAndTitle: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 28,
    color: '#1E3A8A',
    fontFamily: 'Noto Serif SC Bold',
    marginBottom: 3,
  },
  subtitle: {
    fontSize: 12,
    color: '#4B5563',
    marginBottom: 5,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 6,
  },
  contactItem: {
    fontSize: 10,
    color: '#4B5563',
  },
  sectionContainer: {
    marginTop: 12,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 14,
    marginBottom: 8,
    color: '#1E3A8A',
    fontFamily: 'Noto Serif SC Bold',
    backgroundColor: '#EFF6FF',
    padding: '6 10',
    paddingLeft: 14,
    borderRadius: 4,
    borderLeft: '4px solid #3B82F6',
  },
  content: {
    fontSize: 10,
    lineHeight: 1.4,
  },
  column: {
    flexDirection: 'column',
    marginBottom: 12,
    paddingLeft: 8,
    borderLeft: '2px solid #E5E7EB',
  },
  company: {
    fontSize: 13,
    marginBottom: 2,
    fontFamily: 'Noto Serif SC Bold',
    color: '#1F2937',
  },
  positionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  position: {
    fontSize: 11,
    color: '#4B5563',
    marginBottom: 1,
  },
  date: {
    fontSize: 9,
    color: '#6B7280',
    backgroundColor: '#F3F4F6',
    padding: '2 5',
    borderRadius: 3,
  },
  bulletList: {
    marginTop: 3,
  },
  bullet: {
    fontSize: 10,
    marginBottom: 2,
    lineHeight: 1.4,
  },
  skillsRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  skillsLabel: {
    width: 85,
    fontFamily: 'Noto Serif SC Bold',
    fontSize: 11,
    color: '#1F2937',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    flex: 1,
  },
  skillTag: {
    fontSize: 9,
    padding: '3 6',
    backgroundColor: '#DBEAFE',
    borderRadius: 4,
    color: '#2563EB',
    marginBottom: 2,
  },
  publicationsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  publicationBox: {
    width: '48%',
    padding: 10,
    backgroundColor: '#F9FAFB',
    borderRadius: 5,
    borderLeft: '4px solid #3B82F6',
  },
  publicationTitle: {
    fontSize: 11,
    fontFamily: 'Noto Serif SC Bold',
    marginBottom: 4,
    color: '#1F2937',
  },
  honorsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
  },
  honorColumn: {
    width: '48%',
  },
  educationDetails: {
    marginTop: 3,
  },
  infoTag: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 9,
    padding: '2 6',
    borderRadius: 3,
    marginBottom: 2,
    color: '#1E3A8A',
    backgroundColor: '#EFF6FF',
  },
  pageNumber: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 9,
    color: '#9CA3AF',
  }
});

// 创建PDF内容组件
const ResumeDocument = () => (
  <Document>
    {/* 第一页 */}
    <Page size="A4" style={styles.page}>
      {/* 头部信息 */}
      <View style={styles.header}>
        <View style={styles.headerDecoration} />
        <View style={styles.titleContainer}>
          <View style={styles.nameAndTitle}>
            <Text style={styles.title}>孟健</Text>
            <Text style={styles.subtitle}>Flow-Parallel 前端团队负责人 | 豆包Marscode官方讲师 | 技术作家</Text>
          </View>
        </View>
        <View style={styles.contactRow}>
          <Text style={styles.contactItem}>微信: mjcoding</Text>
          <Text style={styles.contactItem}>•</Text>
          <Text style={styles.contactItem}>个人网站: mengjian.site</Text>
          <Text style={styles.contactItem}>•</Text>
          <Text style={styles.contactItem}>GitHub: mengjian-github</Text>
        </View>
      </View>

      {/* 技术专长 */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>技术专长</Text>
        <View style={styles.skillsRow}>
          <Text style={styles.skillsLabel}>前端开发</Text>
          <View style={styles.skillsContainer}>
            <Text style={{...styles.skillTag, backgroundColor: '#DBEAFE', color: '#2563EB'}}>React</Text>
            <Text style={{...styles.skillTag, backgroundColor: '#DCFCE7', color: '#16A34A'}}>Vue</Text>
            <Text style={{...styles.skillTag, backgroundColor: '#EDE9FE', color: '#7C3AED'}}>TypeScript</Text>
            <Text style={{...styles.skillTag, backgroundColor: '#FEF3C7', color: '#D97706'}}>Electron</Text>
          </View>
        </View>
        <View style={styles.skillsRow}>
          <Text style={styles.skillsLabel}>AI 技术融合</Text>
          <View style={styles.skillsContainer}>
            <Text style={{...styles.skillTag, backgroundColor: '#FEE2E2', color: '#DC2626'}}>D2C</Text>
            <Text style={{...styles.skillTag, backgroundColor: '#E0E7FF', color: '#4F46E5'}}>P2C</Text>
            <Text style={{...styles.skillTag, backgroundColor: '#FCE7F3', color: '#DB2777'}}>Copilot</Text>
            <Text style={{...styles.skillTag, backgroundColor: '#DBEAFE', color: '#2563EB'}}>MCP</Text>
            <Text style={{...styles.skillTag, backgroundColor: '#F3E8FF', color: '#9333EA'}}>DeepSeek</Text>
          </View>
        </View>
      </View>

      {/* 工作经历 */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>工作经历</Text>
        
        <View style={styles.column}>
          <Text style={styles.company}>字节跳动</Text>
          <View style={styles.positionRow}>
            <Text style={styles.position}>Flow-Parallel 前端团队负责人</Text>
            <Text style={styles.date}>2024 - 至今</Text>
          </View>
          <View style={styles.bulletList}>
            <Text style={styles.bullet}>• 负责猫箱AI产品的研发工作</Text>
            <Text style={styles.bullet}>• 担任豆包Marscode官方讲师</Text>
            <Text style={styles.bullet}>• 致力于推动 AI 与前端技术融合发展</Text>
          </View>
        </View>

        <View style={styles.column}>
          <Text style={styles.company}>腾讯</Text>
          <View style={styles.positionRow}>
            <Text style={styles.position}>QQ 大前端五组负责人（T11）</Text>
            <Text style={styles.date}>2022.12 - 2023</Text>
          </View>
          <View style={styles.bulletList}>
            <Text style={styles.bullet}>• 负责 QQ 群基础、QQ 群视频等多个核心业务</Text>
            <Text style={styles.bullet}>• 负责大前端 AI 方向建设落地，整体提效 30%以上</Text>
            <Text style={styles.bullet}>• 建设智能代码生成平台 Ultron Smartcode</Text>
          </View>
        </View>

        <View style={styles.column}>
          <Text style={styles.company}>腾讯</Text>
          <View style={styles.positionRow}>
            <Text style={styles.position}>腾讯课堂运营前端负责人</Text>
            <Text style={styles.date}>2018.03 - 2022.11</Text>
          </View>
          <View style={styles.bulletList}>
            <Text style={styles.bullet}>• 负责课堂 C 侧业务的前端预审、技术方案</Text>
            <Text style={styles.bullet}>• 多端实现拉通优化，涉及 PC、H5、APP 等</Text>
            <Text style={styles.bullet}>• 负责部门研发效能建设</Text>
          </View>
        </View>
        
        <View style={{...styles.column, marginBottom: 0}}>
          <Text style={styles.company}>腾讯</Text>
          <View style={styles.positionRow}>
            <Text style={styles.position}>厘米秀前端开发</Text>
            <Text style={styles.date}>2016.07 - 2018.03</Text>
          </View>
          <View style={styles.bulletList}>
            <Text style={styles.bullet}>• 负责厘米秀团队前端开发工作</Text>
            <Text style={styles.bullet}>• 转岗腾讯课堂，离开团队时绩效考核 4 星</Text>
          </View>
        </View>
      </View>

      {/* 页码 */}
      <Text style={styles.pageNumber}>1 / 2</Text>
    </Page>

    {/* 第二页 */}
    <Page size="A4" style={styles.page}>
      {/* 重点项目 */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>重点项目</Text>
        
        <View style={styles.column}>
          <Text style={styles.company}>AI 大前端落地专项</Text>
          <View style={styles.positionRow}>
            <View style={{ flexDirection: 'row', gap: 8 }}>
              <Text style={styles.infoTag}>AI技术</Text>
              <Text style={styles.infoTag}>生产力工具</Text>
            </View>
            <Text style={styles.date}>2022.06 - 2023</Text>
          </View>
          <View style={styles.bulletList}>
            <Text style={styles.bullet}>• 基于 PB 解析与 TDesign 场景化抽象，构建智能后台 P2C 方案</Text>
            <Text style={styles.bullet}>• 对于有设计稿的业务场景，搭建整套 D2C 方案，开发 Figma 插件</Text>
            <Text style={styles.bullet}>• D2C 对标业界的 locofy、codefun 等产品，目前还原度已达到 95%以上</Text>
          </View>
        </View>

        <View style={styles.column}>
          <Text style={styles.company}>QQ NT 版本性能优化专项</Text>
          <View style={styles.positionRow}>
            <View style={{ flexDirection: 'row', gap: 8 }}>
              <Text style={styles.infoTag}>性能优化</Text>
              <Text style={styles.infoTag}>Electron</Text>
            </View>
            <Text style={styles.date}>2022.03 - 2022.05</Text>
          </View>
          <View style={styles.bulletList}>
            <Text style={styles.bullet}>• 负责 QQ 启动性能优化、图片查看器大图性能优化的相关工作</Text>
            <Text style={styles.bullet}>• 对 QQ 启动流程做了单文件打包、异步拆包等优化工作</Text>
          </View>
        </View>
      </View>

      {/* 著作与出版 */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>著作与出版</Text>
        <View style={{marginLeft: 8, marginBottom: 8}}>
          <Text style={styles.company}>《DeepSeek极简入门与应用》</Text>
          <Text style={styles.bullet}>出版书籍，全网销量突破50万册</Text>
        </View>
        <View style={{marginLeft: 8}}>
          <Text style={styles.company}>《React 源码全解》</Text>
          <Text style={styles.bullet}>开源电子书，深入解析React源码</Text>
        </View>
      </View>

      {/* 荣誉奖项 */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>荣誉奖项</Text>
        <View style={{marginLeft: 8}}>
          <View style={{marginBottom: 8}}>
            <Text style={styles.company}>公司荣誉</Text>
            <View style={styles.bulletList}>
              <Text style={styles.bullet}>• 前端工程化 Teflow Oteam PMC</Text>
              <Text style={styles.bullet}>• 智能代码生成 TIC Oteam PMC</Text>
              <Text style={styles.bullet}>• 获得十二项公司级荣誉</Text>
            </View>
          </View>
          <View>
            <Text style={styles.company}>业界影响力</Text>
            <View style={styles.bulletList}>
              <Text style={styles.bullet}>• 逆向分析 Copilot（Github 上千star）</Text>
              <Text style={styles.bullet}>• GMTC 全球大前端技术大会演讲嘉宾</Text>
              <Text style={styles.bullet}>• GIAC 全球互联网架构大会出品人</Text>
            </View>
          </View>
        </View>
      </View>

      {/* 教育背景 */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>教育背景</Text>
        <View style={styles.column}>
          <Text style={styles.company}>西安交通大学</Text>
          <View style={styles.educationDetails}>
            <Text style={styles.position}>自动化科学与技术 · 本科</Text>
            <Text style={styles.date}>2012 - 2016</Text>
          </View>
        </View>
      </View>

      {/* 页码 */}
      <Text style={styles.pageNumber}>2 / 2</Text>
    </Page>
  </Document>
);

// 创建预览组件
const ResumePDFPreview = () => (
  <PDFViewer style={styles.viewer}>
    <ResumeDocument />
  </PDFViewer>
);

// 导出PDF文档组件供下载使用
export const ResumeDocumentOnly = ResumeDocument;

// 默认导出预览组件
export default ResumePDFPreview; 