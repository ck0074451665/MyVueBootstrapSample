import Vue from 'vue'
import Router from 'vue-router'
import PageIndex from '@/components/PageIndex'
import FundationCourse from '@/components/FundationCourse'
import LearningCenter from '@/components/LearningCenter'
import StudySkills from '@/components/StudySkills'
import UserCenter from '@/components/UserCenter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PageIndex',
      component: PageIndex
    },
    {
      path: '/fundationcourse',
      name: 'FundationCourse',
      component: FundationCourse
    },
    {
      path: '/learningcenter',
      name: 'LearningCenter',
      component: LearningCenter
    },
    {
      path: '/studyskills',
      name: 'StudySkills',
      component: StudySkills
    },
    {
      path: '/usercenter',
      name: 'UserCenter',
      component: UserCenter
    }
  ]
})
