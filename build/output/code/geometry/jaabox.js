(function(a){var d=a.Vector3DUtil;var c=a.JNumber3D;var b=function(f,e){this._minPos=f.slice(0);this._maxPos=e.slice(0);};b.prototype._minPos=null;b.prototype._maxPos=null;b.prototype.get_minPos=function(){return this._minPos;};b.prototype.set_minPos=function(e){this._minPos=e.slice(0);};b.prototype.get_maxPos=function(){return this._maxPos;};b.prototype.set_maxPos=function(e){this._maxPos=e.slice(0);};b.prototype.get_sideLengths=function(){var e=this._maxPos.slice(0);d.subtract(e,this._minPos);return e;};b.prototype.get_centrePos=function(){var e=this._minPos.slice(0);return c.getScaleVector(d.add(e,this._maxPos),0.5);};b.prototype.move=function(e){d.add(this._minPos,e);d.add(this._maxPos,e);};b.prototype.clear=function(){this._minPos=d.create(c.NUM_HUGE,c.NUM_HUGE,c.NUM_HUGE,0);this._maxPos=d.create(-c.NUM_HUGE,-c.NUM_HUGE,-c.NUM_HUGE,0);};b.prototype.clone=function(){return new b(this._minPos,this._maxPos);};b.prototype.addPoint=function(g){var f=this._minPos;var e=this._maxPos;if(g[0]<f[0]){f[0]=g[0]-c.NUM_TINY;}if(g[0]>e[0]){e[0]=g[0]+c.NUM_TINY;}if(g[1]<f[1]){f[1]=g[1]-c.NUM_TINY;}if(g[1]>e[1]){e[1]=g[1]+c.NUM_TINY;}if(g[2]<f[2]){f[2]=g[2]-c.NUM_TINY;}if(g[2]>e[2]){e[2]=g[2]+c.NUM_TINY;}};b.prototype.addBox=function(e){var f=e.getCornerPoints(e.get_currentState());this.addPoint(f[0]);this.addPoint(f[1]);this.addPoint(f[2]);this.addPoint(f[3]);this.addPoint(f[4]);this.addPoint(f[5]);this.addPoint(f[6]);this.addPoint(f[7]);};b.prototype.addSphere=function(e){var g=this._minPos;var f=this._maxPos;if(e.get_currentState().position[0]-e.get_radius()<g[0]){g[0]=(e.get_currentState().position[0]-e.get_radius())-c.NUM_TINY;}if(e.get_currentState().position[0]+e.get_radius()>f[0]){f[0]=(e.get_currentState().position[0]+e.get_radius())+c.NUM_TINY;}if(e.get_currentState().position[1]-e.get_radius()<g[1]){g[1]=(e.get_currentState().position[1]-e.get_radius())-c.NUM_TINY;}if(e.get_currentState().position[1]+e.get_radius()>f[1]){f[1]=(e.get_currentState().position[1]+e.get_radius())+c.NUM_TINY;}if(e.get_currentState().position[2]-e.get_radius()<g[2]){g[2]=(e.get_currentState().position[2]-e.get_radius())-c.NUM_TINY;}if(e.get_currentState().position[2]+e.get_radius()>f[2]){f[2]=(e.get_currentState().position[2]+e.get_radius())+c.NUM_TINY;}};b.prototype.addCapsule=function(f){var h=f.getBottomPos(f.get_currentState());var g=this._minPos;var e=this._maxPos;if(h[0]-f.get_radius()<g[0]){g[0]=(h[0]-f.get_radius())-c.NUM_TINY;}if(h[0]+f.get_radius()>e[0]){e[0]=(h[0]+f.get_radius())+c.NUM_TINY;}if(h[1]-f.get_radius()<g[1]){g[1]=(h[1]-f.get_radius())-c.NUM_TINY;}if(h[1]+f.get_radius()>e[1]){e[1]=(h[1]+f.get_radius())+c.NUM_TINY;}if(h[2]-f.get_radius()<g[2]){g[2]=(h[2]-f.get_radius())-c.NUM_TINY;}if(h[2]+f.get_radius()>e[2]){e[2]=(h[2]+f.get_radius())+c.NUM_TINY;}h=f.getEndPos(f.get_currentState());if(h[0]-f.get_radius()<g[0]){g[0]=(h[0]-f.get_radius())-c.NUM_TINY;}if(h[0]+f.get_radius()>e[0]){e[0]=(h[0]+f.get_radius())+c.NUM_TINY;}if(h[1]-f.get_radius()<g[1]){g[1]=(h[1]-f.get_radius())-c.NUM_TINY;}if(h[1]+f.get_radius()>e[1]){e[1]=(h[1]+f.get_radius())+c.NUM_TINY;}if(h[2]-f.get_radius()<g[2]){g[2]=(h[2]-f.get_radius())-c.NUM_TINY;}if(h[2]+f.get_radius()>e[2]){e[2]=(h[2]+f.get_radius())+c.NUM_TINY;}};b.prototype.addSegment=function(e){this.addPoint(e.origin);this.addPoint(e.getEnd());};b.prototype.overlapTest=function(g){var f=this._minPos;var e=this._maxPos;return((f[2]>=g.get_maxPos()[2])||(e[2]<=g.get_minPos()[2])||(f[1]>=g.get_maxPos()[1])||(e[1]<=g.get_minPos()[1])||(f[0]>=g.get_maxPos()[0])||(e[0]<=g.get_minPos()[0]))?false:true;};b.prototype.isPointInside=function(g){var f=this._minPos;var e=this._maxPos;return((g[0]>=f[0])&&(g[0]<=e[0])&&(g[1]>=f[1])&&(g[1]<=e[1])&&(g[2]>=f[2])&&(g[2]<=e[2]));};b.prototype.toString=function(){var f=this._minPos;var e=this._maxPos;return[f[0],f[1],f[2],e[0],e[1],e[2]].toString();};a.JAABox=b;})(jigLib);