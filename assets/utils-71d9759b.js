function u(){const l=[{description:"lg"},{effectiveStart:"md",effectiveEnd:"md"},{includeTags:"lg"},{excludeTags:"lg"}];function a(t){return t.id}function e(t){return`${t.category}:${t.name}`}return{fieldsLayout:l,dataFields:[{key:"id",type:"text",label:"ID",listable:!0,viewable:!1,creatable:!1,updatable:!1,sortable:!0},{key:"description",type:"text",label:"Description",listable:!0,viewable:!0,creatable:!0,updatable:!0,filterable:!0},{key:"effectiveStart",type:"date",label:"Effective Start",listable:!0,viewable:!0,creatable:!0,updatable:!0,filterable:!0,sortable:!0},{key:"effectiveEnd",type:"date",label:"Effective End",listable:!0,viewable:!0,creatable:!0,updatable:!0,filterable:!0,sortable:!0},{key:"includeTags",type:"multiSelect",label:"Include Tags",isTags:!0,reference:{label:e},listable:!0,viewable:!0,creatable:!0,updatable:!0,filterable:!0,options:{server:!0,pagination:!0,modelClass:"tags",value:a,label:e}},{key:"excludeTags",type:"multiSelect",label:"Exclude Tags",isTags:!0,reference:{label:e},listable:!0,viewable:!0,creatable:!0,updatable:!0,filterable:!0,options:{server:!0,pagination:!0,modelClass:"tags",value:a,label:e}}],recordValue:a,tagLabel:e}}export{u};
