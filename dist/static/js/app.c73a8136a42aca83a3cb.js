webpackJsonp([1],{"/KV2":function(t,e){},IKlc:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),s=n("NYxO"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("b-menu",[e("b-menu-list",{attrs:{label:"MusicBrainz"}},[e("b-menu-item",{attrs:{label:"アーティスト検索",tag:"router-link",to:"/"}})],1),this._v(" "),e("b-menu-list",[e("b-menu-item",{attrs:{label:"アーティスト検索",tag:"router-link",to:"/artist"}})],1),this._v(" "),e("b-menu-list",[e("b-menu-item",{attrs:{label:"リリース検索",tag:"router-link",to:"/release"}})],1)],1)},staticRenderFns:[]},i=n("VU/8")(null,a,!1,null,null,null).exports,l=n("gRE1"),o=n.n(l),u={computed:{artists:function(){return o()(this.$store.state.artists.artists)}},methods:{onClickDelete:function(t){this.$store.commit("deleteArtist",t)}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[[n("b-table",{ref:"table",attrs:{data:t.artists},scopedSlots:t._u([{key:"default",fn:function(e){return[n("b-table-column",{attrs:{field:"name",label:"名前"}},[t._v(t._s(e.row.name))]),t._v(" "),n("b-table-column",{attrs:{field:"button"}},[n("b-button",{staticClass:"is-small",attrs:{tag:"router-link",to:{path:"/release",query:{id:e.row.id}}}},[t._v("リリース")])],1),t._v(" "),n("b-table-column",{attrs:{field:"delete"}},[n("b-button",{staticClass:"is-danger is-small",on:{click:function(n){return t.onClickDelete(e.row.id)}}},[n("b-icon",{attrs:{icon:"close"}})],1)],1)]}}])})]],2)},staticRenderFns:[]},d={name:"App",components:{Menu:i,List:n("VU/8")(u,c,!1,null,null,null).exports}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"columns",attrs:{id:"app"}},[e("Menu",{staticClass:"column is-one-quarter"}),this._v(" "),e("router-view",{staticClass:"column"}),this._v(" "),e("List",{staticClass:"column is-one-quarter"})],1)},staticRenderFns:[]};var h=n("VU/8")(d,f,!1,function(t){n("IKlc")},null,null).exports,m=n("/ocq"),b=n("fZjL"),p=n.n(b),v=n("mtWM"),_=n.n(v),y={data:function(){return{country:[{id:"JP",name:"日本"},{id:"US",name:"アメリカ"}],searchUrl:"http://musicbrainz.org/ws/2/artist/?fmt=json&query=",query:{artist:"ヨルシカ",type:"group",country:"JP"},isLoading:!1,results:[],columnsVisible:{name:{title:"アーティスト名"},id:{title:"ID"},score:{title:"一致度"}}}},methods:{search:function(){this.isLoading=!0;var t=this.searchUrl+this.create_params();_.a.get(t).then(function(t){this.results=t.data.artists}.bind(this)).catch(function(t){console.log(t)}).finally(function(){this.isLoading=!1}.bind(this))},add:function(t){this.$store.commit("setArtist",t)},create_params:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.query,e=[];return p()(t).forEach(function(n){null===t[n]||(void 0===t[n]?e.push(n):e.push(n+":"+t[n]))}),e.join("%20AND%20")}}},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("b-field",{attrs:{horizontal:"",label:"Artist"}},[n("b-input",{attrs:{placeholder:"Artist",type:"search"},model:{value:t.query.artist,callback:function(e){t.$set(t.query,"artist",e)},expression:"query.artist"}})],1),t._v(" "),n("b-field",{attrs:{horizontal:"",label:"Country"}},[n("b-select",{attrs:{placeholder:"Country"},model:{value:t.query.country,callback:function(e){t.$set(t.query,"country",e)},expression:"query.country"}},t._l(t.country,function(e){return n("option",{key:e.id,domProps:{value:e.id}},[t._v("\n        "+t._s(e.name)+"\n      ")])}),0)],1),t._v(" "),n("b-button",{on:{click:t.search}},[t._v("Search")]),t._v(" "),[n("b-table",{ref:"table",attrs:{data:t.results,loading:t.isLoading},scopedSlots:t._u([{key:"default",fn:function(e){return[n("b-table-column",{attrs:{field:"name",label:t.columnsVisible.name.title}},[t._v("\n          "+t._s(e.row.name)+"\n        ")]),t._v(" "),n("b-table-column",{attrs:{field:"id",label:t.columnsVisible.id.title}},[t._v("\n          "+t._s(e.row.id)+"\n        ")]),t._v(" "),n("b-table-column",{attrs:{field:"score",label:t.columnsVisible.score.title}},[t._v("\n          "+t._s(e.row.score)+"\n        ")]),t._v(" "),n("b-table-column",{attrs:{field:"add"}},[n("b-button",{on:{click:function(n){return t.add(e.row)}}},[t._v("追加")])],1)]}}])})]],2)},staticRenderFns:[]},k=n("VU/8")(y,g,!1,null,null,null).exports,q=n("Xxa5"),w=n.n(q),x=n("BO1k"),$=n.n(x),A=n("d7EF"),S=n.n(A),U=n("exGp"),V=n.n(U),L={data:function(){return{country:[{id:"JP",name:"日本"},{id:"US",name:"アメリカ"}],searchUrl:"http://musicbrainz.org/ws/2/artist/?fmt=json&query=",releaseUrl:"http://musicbrainz.org/ws/2/release-group/?fmt=json&",query:{artist:"",type:"group",country:"JP"},isLoading:!1,showDetailIcon:!1,results:[],columnsVisible:{name:{title:"アーティスト名"},country:{title:"国"},score:{title:"一致度"}}}},methods:{search:function(){this.isLoading=!0;var t,e=this.searchUrl+this.create_params();_.a.get(e).then((t=V()(w.a.mark(function t(e){var n,r,s,a,i,l,o,u,c,d,f,h;return w.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=!0,r=!1,s=void 0,t.prev=3,a=$()(e.data.artists.entries());case 5:if(n=(i=a.next()).done){t.next=19;break}return l=i.value,o=S()(l,2),u=o[0],c=o[1],d={type:"album|ep",artist:c.id},f=this.releaseUrl+this.join_params(d),t.next=14,_.a.get(f);case 14:h=t.sent,e.data.artists[u].items=h.data["release-groups"];case 16:n=!0,t.next=5;break;case 19:t.next=25;break;case 21:t.prev=21,t.t0=t.catch(3),r=!0,s=t.t0;case 25:t.prev=25,t.prev=26,!n&&a.return&&a.return();case 28:if(t.prev=28,!r){t.next=31;break}throw s;case 31:return t.finish(28);case 32:return t.finish(25);case 33:console.log(e.data.artists),this.results=e.data.artists;case 35:case"end":return t.stop()}},t,this,[[3,21,25,33],[26,,28,32]])})),function(e){return t.apply(this,arguments)}).bind(this)).catch(function(t){console.log(t)}).finally(function(){this.isLoading=!1}.bind(this))},create_params:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.query,e=[];return p()(t).forEach(function(n){null===t[n]||(void 0===t[n]?e.push(n):e.push(n+":"+t[n]))}),e.join("%20AND%20")},join_params:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.query,e=[];return p()(t).forEach(function(n){null===t[n]||(void 0===t[n]?e.push(n):e.push(n+"="+t[n]))}),e.join("&")},toggle:function(t){this.$refs.table.toggleDetails(t)}}},E={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("b-field",{attrs:{horizontal:"",label:"Artist"}},[n("b-input",{attrs:{placeholder:"Artist",type:"search"},model:{value:t.query.artist,callback:function(e){t.$set(t.query,"artist",e)},expression:"query.artist"}})],1),t._v(" "),n("b-field",{attrs:{horizontal:"",label:"Country"}},[n("b-select",{attrs:{placeholder:"Country"},model:{value:t.query.country,callback:function(e){t.$set(t.query,"country",e)},expression:"query.country"}},t._l(t.country,function(e){return n("option",{key:e.id,domProps:{value:e.id}},[t._v("\n        "+t._s(e.name)+"\n      ")])}),0)],1),t._v(" "),n("b-button",{on:{click:t.search}},[t._v("Search")]),t._v(" "),n("b-table",{ref:"table",attrs:{data:t.results,detailed:"",hoverable:"","custom-detail-row":"","detail-key":"name",loading:t.isLoading,"show-detail-icon":t.showDetailIcon},scopedSlots:t._u([{key:"default",fn:function(e){return[n("b-table-column",{attrs:{field:"name",label:t.columnsVisible.name.title}},[[n("a",{on:{click:function(n){return t.toggle(e.row)}}},[t._v("\n            "+t._s(e.row.name)+"\n          ")])]],2),t._v(" "),n("b-table-column",{attrs:{field:"country",label:t.columnsVisible.country.title}},[t._v("\n        "+t._s(e.row.country)+"\n      ")]),t._v(" "),n("b-table-column",{attrs:{field:"score",label:t.columnsVisible.score.title}},[t._v("\n        "+t._s(e.row.score)+"\n      ")])]}},{key:"detail",fn:function(e){return t._l(e.row.items,function(e){return n("tr",{key:e.id},[n("td",[t._v("- "+t._s(e.title))]),t._v(" "),n("td",[t._v(t._s(e["first-release-date"]))]),t._v(" "),n("td",[t._v(t._s(e["primary-type"]))])])})}}])})],1)},staticRenderFns:[]},j=n("VU/8")(L,E,!1,null,null,null).exports,C={data:function(){return{country:[{id:"JP",name:"日本"},{id:"US",name:"アメリカ"}],searchUrl:"http://musicbrainz.org/ws/2/release-group/?fmt=json&",query:{type:"album|ep",artist:this.$route.query.id},isLoading:!1,results:[],columns:[{field:"title",label:"タイトル"},{field:"first-release-date",label:"リリース日"},{field:"primary-type",label:"タイプ"}]}},watch:{$route:function(t,e){this.$set(this.query,"artist",t.query.id)}},methods:{search:function(){this.isLoading=!0;var t=this.searchUrl+this.create_params();_.a.get(t).then(function(t){this.results=t.data["release-groups"]}.bind(this)).catch(function(t){console.log(t)}).finally(function(){this.isLoading=!1}.bind(this))},create_params:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.query,e=[];return p()(t).forEach(function(n){null===t[n]||(void 0===t[n]?e.push(n):e.push(n+"="+t[n]))}),e.join("&")}}},z={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("b-field",{attrs:{horizontal:"",label:"Artist"}},[n("b-input",{attrs:{placeholder:"Artist",type:"search"},model:{value:t.query.artist,callback:function(e){t.$set(t.query,"artist",e)},expression:"query.artist"}})],1),t._v(" "),n("b-button",{on:{click:t.search}},[t._v("Search")]),t._v(" "),[n("b-table",{attrs:{data:t.results,columns:t.columns,"detail-key":"name",loading:t.isLoading},on:{"details-open":function(e,n){return t.$toast.open("Expanded "+e.user.first_name)}}})]],2)},staticRenderFns:[]},R=n("VU/8")(C,z,!1,null,null,null).exports;r.default.use(m.a);var D=new m.a({routes:[{path:"/",name:"SearchArtist",component:k},{path:"/artist",name:"SearchArtistNRelease",component:j},{path:"/release",name:"SearchRelease",component:R}]}),P=n("O3Oo"),F=n.n(P),J=(n("/KV2"),{modules:{artists:{state:{artists:{}},mutations:{setArtist:function(t,e){r.default.set(t.artists,e.id,e)},deleteArtist:function(t,e){r.default.delete(t.artists,e)}},getter:{arrayArtists:function(t){return o()(t.artists)}}}}});n("csSS");r.default.use(s.a),r.default.use(F.a),r.default.config.productionTip=!1,new r.default({el:"#app",router:D,components:{App:h},template:"<App/>",store:new s.a.Store(J)})},csSS:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.c73a8136a42aca83a3cb.js.map