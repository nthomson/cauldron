(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,a,t){e.exports=t(65)},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){},60:function(e,a,t){},65:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(25),i=t.n(c),r=(t(34),t(35),t(10)),m=t(6),s=(t(36),function(e){var a=e.children;return l.a.createElement("div",{className:"scene"},l.a.createElement("h4",null,"Setting The Scene"),l.a.createElement("p",null,a))}),u=(t(37),function(e){var a=e.name,t=e.type,n=e.children;return l.a.createElement("div",{className:"item"},l.a.createElement("h4",null,a),l.a.createElement("div",{className:"type"},t),l.a.createElement("div",{className:"description"},n))}),o=(t(38),function(e){var a=e.children,t=e.title;return l.a.createElement("section",{className:"page"},t?l.a.createElement("div",{className:"col100"},l.a.createElement("h1",null,t)):null,a)}),d=t(8),E=(t(39),t(26)),v=t.n(E).a.create({baseURL:"http://localhost:5000/api"}),p=function(e){var a=e.type,t=e.id,l=Object(n.useState)(!0),c=Object(d.a)(l,2),i=c[0],r=c[1],m=Object(n.useState)({}),s=Object(d.a)(m,2),u=s[0],o=s[1];return Object(n.useEffect)(function(){r(!0),v.get("/".concat(a,"/").concat(t)).then(function(e){o(e.data),r(!1)})},[a,t]),{monster:u,fetching:i}},b=function(e){return Math.floor((e-10)/2)},g=function(e){var a=e.monsterId,t=Object(n.useState)(a),c=Object(d.a)(t,2),i=c[0],r=c[1],m=Object(n.useState)(),s=Object(d.a)(m,2),u=s[0],o=s[1],E=p({type:"monsters",id:i}),v=E.monster,g=E.fetching;return i?!g&&v?l.a.createElement("div",{className:"stat-block"},l.a.createElement("h1",null,v.name),l.a.createElement("div",{className:"size"},v.size," ",v.type,", ",v.alignment),l.a.createElement("ul",{className:"block"},l.a.createElement("li",null,l.a.createElement("strong",null,"Armor Class")," ",v.armor_class),l.a.createElement("li",null,l.a.createElement("strong",null,"Hit Points")," ",v.hit_points),l.a.createElement("li",null,l.a.createElement("strong",null,"Speed"),Object.keys(v.speed).map(function(e){return l.a.createElement("span",{key:e}," ",e,": ",v.speed[e])}))),l.a.createElement("div",{className:"ability-scores"},l.a.createElement("div",{className:"ability"},l.a.createElement("div",{className:"ability-name"},"STR"),l.a.createElement("div",{className:"ability-value"},v.strength," (",b(v.strength),")")),l.a.createElement("div",{className:"ability"},l.a.createElement("div",{className:"ability-name"},"DEX"),l.a.createElement("div",{className:"ability-value"},v.dexterity," (",b(v.dexterity),")")),l.a.createElement("div",{className:"ability"},l.a.createElement("div",{className:"ability-name"},"CON"),l.a.createElement("div",{className:"ability-value"},v.constitution," (",b(v.constitution),")")),l.a.createElement("div",{className:"ability"},l.a.createElement("div",{className:"ability-name"},"INT"),l.a.createElement("div",{className:"ability-value"},v.intelligence," (",b(v.intelligence),")")),l.a.createElement("div",{className:"ability"},l.a.createElement("div",{className:"ability-name"},"WIS"),l.a.createElement("div",{className:"ability-value"},v.wisdom," (",b(v.wisdom),")")),l.a.createElement("div",{className:"ability"},l.a.createElement("div",{className:"ability-name"},"CHA"),l.a.createElement("div",{className:"ability-value"},v.charisma," (",b(v.charisma),")"))),l.a.createElement("ul",{className:"block"},v.damage_vulnerabilities.length?l.a.createElement("li",null,l.a.createElement("strong",null,"Damage Vulnerabilities")," ",v.damage_vulnerabilities.join(", ")):null,v.damage_resistances.length?l.a.createElement("li",null,l.a.createElement("strong",null,"Damage resistances")," ",v.damage_resistances.join(", ")):null,v.damage_immunities.length?l.a.createElement("li",null,l.a.createElement("strong",null,"Damage immunities")," ",v.damage_immunities.join(", ")):null,v.condition_immunities.length?l.a.createElement("li",null,l.a.createElement("strong",null,"Condition immunities")," ",v.condition_immunities.join(", ")):null,v.senses?l.a.createElement("li",null,l.a.createElement("strong",null,"Senses")," ",v.senses):null,v.languages?l.a.createElement("li",null,l.a.createElement("strong",null,"Languages")," ",v.languages):null,l.a.createElement("li",null,l.a.createElement("strong",null,"Challenge")," ",v.challenge_rating)),v.special_abilities?l.a.createElement("ul",{className:"special"},v.special_abilities.map(function(e){return l.a.createElement("div",{key:e.name},l.a.createElement("strong",null,e.name),l.a.createElement("pre",null,e.desc))})):null,l.a.createElement("h2",null,"Actions"),l.a.createElement("div",{className:"action"},v.actions.map(function(e){return l.a.createElement("p",{key:e.name},l.a.createElement("strong",null,e.name)," ",e.desc)}))):null:l.a.createElement("div",null,l.a.createElement("input",{type:"text",value:u,onChange:function(e){o(e.target.value)}}),l.a.createElement("button",{type:"button",onClick:function(){r(u)}},"Go"))},h=(t(57),function(){return l.a.createElement("table",{className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"d6"),l.a.createElement("th",null,"Motivations for joining"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"1"),l.a.createElement("td",null,"Riches. You seek gold and treasure.")),l.a.createElement("tr",null,l.a.createElement("td",null,"2"),l.a.createElement("td",null,"Violence. You take pleasure in cruelty and killing")),l.a.createElement("tr",null,l.a.createElement("td",null,"3"),l.a.createElement("td",null,"You are not a Dark Elf, but wish to be considered a citizen.")),l.a.createElement("tr",null,l.a.createElement("td",null,"4"),l.a.createElement("td",null,"You are loyal to The Empire and wish to serve your Lord.")),l.a.createElement("tr",null,l.a.createElement("td",null,"5"),l.a.createElement("td",null,"You were a criminal and you've joined in order to pay your debt to The Empire")),l.a.createElement("tr",null,l.a.createElement("td",null,"6"),l.a.createElement("td",null,"One of your friends dared you and now you think it's too late to back out."))))}),y=(t(58),function(){return l.a.createElement("div",{className:"container"},l.a.createElement(o,{title:"A Homebrew Adventure"},l.a.createElement("div",{className:"col50"},l.a.createElement("h2",null,"Nullam nec gravida sapien"),l.a.createElement("p",null,"Proin a ligula scelerisque, tempus lacus sodales, sagittis justo. Etiam a laoreet quam, dictum volutpat quam. Donec sodales eu libero in dignissim. Fusce venenatis neque sit amet commodo auctor. "),l.a.createElement(s,null,"Donec in nulla non diam semper tempor. Nullam nec gravida sapien. Morbi volutpat condimentum nibh vitae luctus. Nulla vulputate turpis mauris, eu tempus dolor accumsan sed."),l.a.createElement(h,null),l.a.createElement(u,{name:"Staff of Focused Pain",type:"Staff, Arcane Focus"},"+1 Spell Attack, +1 Spell Saving Throw DC ",l.a.createElement("br",null),l.a.createElement("strong",null,"Action:")," You are able to use the crystal embedded into this staff in order to focus your pain, recovering one expended spell slot. You are only able to do this once per day.")),l.a.createElement("div",{className:"col50"},l.a.createElement(g,{monsterId:71}))))}),N=(t(59),function(){return l.a.createElement("section",{className:"intro"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"Cauldron"),l.a.createElement("p",null,"Easily build beautiful homebrew content using the 5e SRD")))}),f=(t(60),function(){return l.a.createElement("div",{className:"site-header"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"app-header"},l.a.createElement("h1",null,"Cauldron"),l.a.createElement("nav",{className:"site-nav"},l.a.createElement(r.b,{to:"/",activeClassName:"active",exact:!0},"Home"),l.a.createElement(r.b,{to:"/editor",activeClassName:"active",exact:!0},"Editor")))))});var j=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(r.a,null,l.a.createElement(f,null),l.a.createElement(m.a,{path:"/",exact:!0,component:N}),l.a.createElement(m.a,{path:"/editor",exact:!0,component:y})))};i.a.render(l.a.createElement(j,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.0e427314.chunk.js.map