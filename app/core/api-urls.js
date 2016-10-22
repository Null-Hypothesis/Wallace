'use strict';

this.apiUrls = {};

this.apiUrls.root = 'https://private-anon-cb1e9e27a4-nullhypothesis.apiary-mock.com';
this.apiUrls.signUp = apiUrls.root + '/auth';
this.apiUrls.signIn = apiUrls.signUp + '/sign_in';
this.apiUrls.courses = apiUrls.root + '/courses';
this.apiUrls.courseTags = apiUrls.courses + '/tags';
this.apiUrls.posts = apiUrls.root + '/posts';
this.apiUrls.postTags = apiUrls.posts + '/tags';
this.apiUrls.teachers = apiUrls.courses + '/teachers';
