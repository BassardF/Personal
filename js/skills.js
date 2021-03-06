var plot = {

    init : function(){
        this.drawWebBasics();
        this.drawWebFwk();
        this.drawWebAround();
        this.drawMobile();
        this.drawBackEnd();
        this.drawJavaFwk();
    },

    option : function(number){
        return {
            title:'',
            seriesColors:['#506D7D', '#94CCB9', '#FFECA7', '#FFB170', '#F07D65'],
            seriesDefaults:{
                renderer: $.jqplot.BarRenderer,
                rendererOptions: {
                    varyBarColor: true,
                    barMargin: number,
                    shadowOffset: 0
                }            
            },
            axes:{
                xaxis:{
                    renderer: $.jqplot.CategoryAxisRenderer           
                },
                yaxis:{
                    min : 0,
                    max : 5,
                    ticks: [1, 2, 3, 4, 5]
                }
            },
            grid: {
                drawGridLines: false,
                gridLineColor: '#ffffff',
                background: '#ffffff',
                borderColor: '#ffffff',
                shadow: false,
            }
        };
    },

    drawWebBasics : function(){        
         $.jqplot('web-basics-chart', [[['HTML5', 5],['JavaScript', 5],['CSS3', 4]]], this.option(20));    
    },

    drawWebFwk : function(){
         $.jqplot('web-fwk-chart', [[['jQuery', 5],['AngularJs', 5],['ReactJs', 4],['Backbone', 4],['Babel/TypeScript', 4]]], this.option(10));    
    },

    drawWebAround : function(){
         $.jqplot('web-around-chart', [[['Bower/npm...', 5],['Grunt/Gulp', 4],['NodeJs', 4],['Express/KOA', 4],['Mocha/PhantomJs', 3]]], this.option(10));    
    },

    drawMobile : function(){
         $.jqplot('mobile-chart', [[['Cordova', 5],['IOS', 4],['Android', 3]]], this.option(20));    
    },

    drawBackEnd : function(){
         $.jqplot('back-end-chart', [[['Java', 5], ['JavaScript', 5], ['C/Objective-C', 4],['Swift', 4],['Ruby/Ror', 4]]], this.option(10));    
    },

    drawJavaFwk : function(){
         $.jqplot('java-fwk-chart', [[['Maven', 5],['Spring', 4],['Struts', 3],['Hibernate', 2]]], this.option(15));    
    }
}

$(document).ready(function(){
    plot.init();
});