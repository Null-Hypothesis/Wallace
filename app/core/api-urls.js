'use strict';

this.apiUrls = {};

this.apiUrls.root = 'https://private-anon-cb1e9e27a4-nullhypothesis.apiary-mock.com';
this.apiUrls.signUp = apiUrls.root + '/users';
this.apiUrls.signIn = apiUrls.signUp + '/token';
this.apiUrls.logOut = apiUrls.signIn;
//this.apiUrls.courses = apiUrls.root + '/courses';
//this.apiUrls.courseTags = apiUrls.courses + '/tags';
//this.apiUrls.posts = apiUrls.root + '/posts';
//this.apiUrls.postTags = apiUrls.posts + '/tags';
this.apiUrls.teachers = apiUrls.courses + '/teachers';


this.apiUrls.courses = 'mock-data/courses.json'
this.apiUrls.courseTags = 'mock-data/courseTags.json';
this.apiUrls.posts = 'mock-data/posts.json'
this.apiUrls.postTags = 'mock-data/postTags.json';