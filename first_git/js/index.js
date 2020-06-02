function Ball(option){
    this._innit(option);
}
Ball.prototype = {
    _innit: function (option) {
        this.parentId = option.parentId;
        this.left = option.left;
        this.top = option.top;
        this.bgColor = option.bgColor;
        this.r = 60;
        this.borderRadius = '50%';
        this.dX = _.random(-5,5);
        this.dY = _.random(-5,5);
        this.dR = _.random(1,3);

    },
    render: function () {
        var parentEle = document.getElementById(this.parentId);
        var childEle = document.createElement('div');
        parentEle.appendChild(childEle);
        childEle.style.position = 'absolute';
        childEle.style.left = this.left + 'px';
        childEle.style.top = this.top + 'px';
        childEle.style.width = this.r + 'px';
        childEle.style.height = this.r + 'px';
        childEle.style.borderRadius = this.borderRadius;
        childEle.style.backgroundColor = this.bgColor;
    },
    update: function() {
        this.left += this.dX;
        this.top += this.dY;
        this.r -= this.dR;
        if (this.r<=0) {
            this.r = 0;
            ballArr = _.without(ballArr,this);
        }
    }
};