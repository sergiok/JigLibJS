(function(a){var b=a.Vector3DUtil;var c=function(d,e){this.Super();this.direction=d;if(e){this.exclusions=e;}};a.extend(c,a.JEffect);c.prototype.direction=null;c.prototype.exclusions=[];c.prototype.isExcluded=function(d){var e=this.exclusions.length;while(e--){if(this.exclusions[e]==d){return true;}}return false;};c.prototype.Apply=function(){var f=a.PhysicsSystem.getInstance();var d=f.get_bodies();var e=d.length;var g;this._affectedBodies=[];while(e--){g=d[e];if(!g.get_movable()||this.isExcluded(g)){continue;}f.activateObject(g);g.addWorldForce(this.direction,[0,0,0]);}};a.Wind=c;})(jigLib);