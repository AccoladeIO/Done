angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  
  .state('start', {
    url: '/Start',
    templateUrl: 'templates/start.html',
    controller: 'startCtrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.activityFeed'
      2) Using $state.go programatically:
        $state.go('tabsController.activityFeed');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/ActivityFeed
      /page1/tab2/ActivityFeed
      /page1/tab4/ActivityFeed
      /page1/tab5/ActivityFeed
  */
  .state('tabsController.activityFeed', {
    url: '/ActivityFeed',
    views: {
      'tab1': {
        templateUrl: 'templates/activityFeed.html',
        controller: 'activityFeedCtrl'
      },
      'tab2': {
        templateUrl: 'templates/activityFeed.html',
        controller: 'activityFeedCtrl'
      },
      'tab4': {
        templateUrl: 'templates/activityFeed.html',
        controller: 'activityFeedCtrl'
      },
      'tab5': {
        templateUrl: 'templates/activityFeed.html',
        controller: 'activityFeedCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.taskFlowDetail'
      2) Using $state.go programatically:
        $state.go('tabsController.taskFlowDetail');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/TaskFlowDetail
      /page1/tab2/TaskFlowDetail
      /page1/tab4/TaskFlowDetail
      /page1/tab5/TaskFlowDetail
  */
  .state('tabsController.taskFlowDetail', {
    url: '/TaskFlowDetail',
    views: {
      'tab1': {
        templateUrl: 'templates/taskFlowDetail.html',
        controller: 'taskFlowDetailCtrl'
      },
      'tab2': {
        templateUrl: 'templates/taskFlowDetail.html',
        controller: 'taskFlowDetailCtrl'
      },
      'tab4': {
        templateUrl: 'templates/taskFlowDetail.html',
        controller: 'taskFlowDetailCtrl'
      },
      'tab5': {
        templateUrl: 'templates/taskFlowDetail.html',
        controller: 'taskFlowDetailCtrl'
      }
    },
    params: {
      item_id: null,
      back_link: null
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.taskFlowDetailConfig'
      2) Using $state.go programatically:
        $state.go('tabsController.taskFlowDetailConfig');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/TaskFlowDetailConfig
      /page1/tab2/TaskFlowDetailConfig
      /page1/tab4/TaskFlowDetailConfig
      /page1/tab5/TaskFlowDetailConfig
  */
  .state('tabsController.taskFlowDetailConfig', {
    url: '/TaskFlowDetailConfig',
    views: {
      'tab1': {
        templateUrl: 'templates/taskFlowDetailConfig.html',
        controller: 'taskFlowDetailConfigCtrl'
      },
      'tab2': {
        templateUrl: 'templates/taskFlowDetailConfig.html',
        controller: 'taskFlowDetailConfigCtrl'
      },
      'tab4': {
        templateUrl: 'templates/taskFlowDetailConfig.html',
        controller: 'taskFlowDetailConfigCtrl'
      },
      'tab5': {
        templateUrl: 'templates/taskFlowDetailConfig.html',
        controller: 'taskFlowDetailConfigCtrl'
      }
    },
    params: {
      item_id: null,
        back_link1: null,
        back_link2: null
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.taskFlowMembers'
      2) Using $state.go programatically:
        $state.go('tabsController.taskFlowMembers');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/TaskFlowMembers
      /page1/tab2/TaskFlowMembers
      /page1/tab4/TaskFlowMembers
      /page1/tab5/TaskFlowMembers
  */
  .state('tabsController.taskFlowMembers', {
    url: '/TaskFlowMembers',
    views: {
      'tab1': {
        templateUrl: 'templates/taskFlowMembers.html',
        controller: 'taskFlowMembersCtrl'
      },
      'tab2': {
        templateUrl: 'templates/taskFlowMembers.html',
        controller: 'taskFlowMembersCtrl'
      },
      'tab4': {
        templateUrl: 'templates/taskFlowMembers.html',
        controller: 'taskFlowMembersCtrl'
      },
      'tab5': {
        templateUrl: 'templates/taskFlowMembers.html',
        controller: 'taskFlowMembersCtrl'
      }
    },
    params: {
      item_id: null,
        back_link1: null,
        back_link2: null
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.taskFlowAddMember'
      2) Using $state.go programatically:
        $state.go('tabsController.taskFlowAddMember');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/Task Flow Add Member
      /page1/tab2/Task Flow Add Member
      /page1/tab4/Task Flow Add Member
      /page1/tab5/Task Flow Add Member
  */
  .state('tabsController.taskFlowAddMember', {
    url: '/Task Flow Add Member',
    views: {
      'tab1': {
        templateUrl: 'templates/taskFlowAddMember.html',
        controller: 'taskFlowAddMemberCtrl'
      },
      'tab2': {
        templateUrl: 'templates/taskFlowAddMember.html',
        controller: 'taskFlowAddMemberCtrl'
      },
      'tab4': {
        templateUrl: 'templates/taskFlowAddMember.html',
        controller: 'taskFlowAddMemberCtrl'
      },
      'tab5': {
        templateUrl: 'templates/taskFlowAddMember.html',
        controller: 'taskFlowAddMemberCtrl'
      }
    },
      params: {
          item_id: null,
          flow_id: 0,
          back_link1: null,
          back_link2: null
      }
  })

  .state('tabsController.userProfile', {
    url: '/UserProfile',
    views: {
      'tab1': {
        templateUrl: 'templates/userProfile.html',
        controller: 'userProfileCtrl'
      }
    }
  })

  .state('otherUserProfile', {
    url: '/OtherUserProfile',
    templateUrl: 'templates/otherUserProfile.html',
    controller: 'otherUserProfileCtrl'
  })

  .state('tabsController.userProfileDetails', {
    url: '/UserProfileDetails',
    views: {
      'tab1': {
        templateUrl: 'templates/userProfileDetails.html',
        controller: 'userProfileDetailsCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.taskDetail'
      2) Using $state.go programatically:
        $state.go('tabsController.taskDetail');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/TaskDetail
      /page1/tab2/TaskDetail
      /page1/tab4/TaskDetail
      /page1/tab5/TaskDetail
  */
  .state('tabsController.taskDetail', {
    url: '/TaskDetail',
    views: {
      'tab1': {
        templateUrl: 'templates/taskDetail.html',
        controller: 'taskDetailCtrl'
      },
      'tab2': {
        templateUrl: 'templates/taskDetail.html',
        controller: 'taskDetailCtrl'
      },
      'tab3': {
        templateUrl: 'templates/taskDetail.html',
        controller: 'taskDetailCtrl'
      },
      'tab4': {
        templateUrl: 'templates/taskDetail.html',
        controller: 'taskDetailCtrl'
      }
    },
    params: {
      item_id: null,
        flow_id: null,
      back_link: null
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.taskFlow'
      2) Using $state.go programatically:
        $state.go('tabsController.taskFlow');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/TaskFlow
      /page1/tab2/TaskFlow
      /page1/tab4/TaskFlow
      /page1/tab5/TaskFlow
  */
  .state('tabsController.taskFlow', {
    url: '/TaskFlow',
    views: {
      'tab1': {
        templateUrl: 'templates/taskFlow.html',
        controller: 'taskFlowCtrl'
      },
      'tab2': {
        templateUrl: 'templates/taskFlow.html',
        controller: 'taskFlowCtrl'
      },
      'tab4': {
        templateUrl: 'templates/taskFlow.html',
        controller: 'taskFlowCtrl'
      },
      'tab5': {
        templateUrl: 'templates/taskFlow.html',
        controller: 'taskFlowCtrl'
      }
    }
  })

  .state('tabsController.chats', {
    url: '/Chats',
    views: {
      'tab5': {
        templateUrl: 'templates/chats.html',
        controller: 'chatsCtrl'
      }
    }
  })

  .state('login', {
    url: '/Login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('splash1', {
    url: '/Splash1',
    templateUrl: 'templates/splash1.html',
    controller: 'splash1Ctrl'
  })

  .state('splash3', {
    url: '/Splash3',
    templateUrl: 'templates/splash3.html',
    controller: 'splash3Ctrl'
  })

  .state('splash4', {
    url: '/Splash4',
    templateUrl: 'templates/splash4.html',
    controller: 'splash4Ctrl'
  })

  .state('splash5', {
    url: '/Splash5',
    templateUrl: 'templates/splash5.html',
    controller: 'splash5Ctrl'
  })

  .state('splash6', {
    url: '/Splash6',
    templateUrl: 'templates/splash6.html',
    controller: 'splash6Ctrl'
  })

  .state('splash7', {
    url: '/Splash7',
    templateUrl: 'templates/splash7.html',
    controller: 'splash7Ctrl'
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.photoCapture'
      2) Using $state.go programatically:
        $state.go('tabsController.photoCapture');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/PhotoCapture
      /page1/tab2/PhotoCapture
      /page1/tab4/PhotoCapture
      /page1/tab5/PhotoCapture
  */
  .state('tabsController.photoCapture', {
    url: '/PhotoCapture',
    views: {
      'tab1': {
        templateUrl: 'templates/photoCapture.html',
        controller: 'photoCaptureCtrl'
      },
      'tab2': {
        templateUrl: 'templates/photoCapture.html',
        controller: 'photoCaptureCtrl'
      },
      'tab4': {
        templateUrl: 'templates/photoCapture.html',
        controller: 'photoCaptureCtrl'
      },
      'tab5': {
        templateUrl: 'templates/photoCapture.html',
        controller: 'photoCaptureCtrl'
      }
    },
    params: {
      item_id: null,
        flow_id: 0,
      back_link1: null,
      back_link2: null
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.mediaLibrary'
      2) Using $state.go programatically:
        $state.go('tabsController.mediaLibrary');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/MediaLibrary
      /page1/tab2/MediaLibrary
      /page1/tab4/MediaLibrary
      /page1/tab5/MediaLibrary
  */
  .state('tabsController.mediaLibrary', {
    url: '/MediaLibrary',
    views: {
      'tab1': {
        templateUrl: 'templates/mediaLibrary.html',
        controller: 'mediaLibraryCtrl'
      },
      'tab2': {
        templateUrl: 'templates/mediaLibrary.html',
        controller: 'mediaLibraryCtrl'
      },
      'tab4': {
        templateUrl: 'templates/mediaLibrary.html',
        controller: 'mediaLibraryCtrl'
      },
      'tab5': {
        templateUrl: 'templates/mediaLibrary.html',
        controller: 'mediaLibraryCtrl'
      }
    },
    params: {
      item_id: null,
        flow_id: 0,
        back_link1: null,
        back_link2: null
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.TaskDetailReject'
      2) Using $state.go programatically:
        $state.go('tabsController.TaskDetailReject');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/ TaskDetailReject
      /page1/tab2/ TaskDetailReject
      /page1/tab4/ TaskDetailReject
      /page1/tab5/ TaskDetailReject
  */
  .state('tabsController.TaskDetailReject', {
    url: '/ TaskDetailReject',
    views: {
      'tab1': {
        templateUrl: 'templates/TaskDetailReject.html',
        controller: 'TaskDetailRejectCtrl'
      },
      'tab2': {
        templateUrl: 'templates/TaskDetailReject.html',
        controller: 'TaskDetailRejectCtrl'
      },
      'tab4': {
        templateUrl: 'templates/TaskDetailReject.html',
        controller: 'TaskDetailRejectCtrl'
      },
      'tab5': {
        templateUrl: 'templates/TaskDetailReject.html',
        controller: 'TaskDetailRejectCtrl'
      }
    }
  })

  .state('tabsController.destroyProfile', {
    url: '/DestroyProfile',
    views: {
      'tab1': {
        templateUrl: 'templates/destroyProfile.html',
        controller: 'destroyProfileCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/Start')

  

});