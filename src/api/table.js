import request from '@/utils/request'
import { getToken } from '@/utils/auth'
export function getArticle(token) {
  return request({
    url: '/api/get/articles',
    method: 'get',
    params: { token }
  })
}

export function addArticle(data) {
  
  return request({
    url: 'api/v1/articles',
    method: 'post',
    params: {title:data.title,
      journal:data.journal,
      author:data.author,
      authors:data.authors,
      date:data.date,
      link:data.link,
      papercode:data.papercode,
      abstract:data.abstract,
      theyear:data.theyear,
      token:getToken() }
  })
}



export function getProject(token) {
  return request({
    url: '/api/get/project',
    method: 'get',
    params: { token }
  })
}

export function addProject(data) {
  
  return request({
    url: 'api/v1/project',
    method: 'post',
    params: {name:data.name,
      link:data.link,
      theyear:data.theyear,
      token:getToken() }
  })
}

