(function(d){var i=d.Vector3DUtil;var a=d.JNumber3D;var g=d.JConstraint;var e=d.JConfig;var f=d.JSphere;var c=d.MaterialProperties;var k=d.RigidBody;var h=d.CollPointInfo;var j=d.CollisionInfo;var b=function(){this.name="SpherePlane";this.type0="SPHERE";this.type1="PLANE";};d.extend(b,d.CollDetectFunctor);b.prototype.collDetect=function(m,v){var t;if(m.body0.get_type()=="PLANE"){t=m.body0;m.body0=m.body1;m.body1=t;}var q=m.body0;var s=m.body1;var w=s.pointPlaneDistance(q.get_oldState().position);var o=s.pointPlaneDistance(q.get_currentState().position);if(Math.min(o,w)>q.get_boundingSphere()+e.collToll){return;}var p=[];var l;var r=q.get_radius()-w;var n=i.subtract(q.get_oldState().position,a.getScaleVector(s.get_normal(),q.get_radius()));l=new h();l.r0=i.subtract(n,q.get_oldState().position);l.r1=i.subtract(n,s.get_oldState().position);l.initialPenetration=r;p.push(l);var u=new j();u.objInfo=m;u.dirToBody=s.get_normal();u.pointInfo=p;var x=new c();x.set_restitution(Math.sqrt(q.get_material().get_restitution()*s.get_material().get_restitution()));x.set_friction(Math.sqrt(q.get_material().get_friction()*s.get_material().get_friction()));u.mat=x;v.push(u);m.body0.collisions.push(u);m.body1.collisions.push(u);};d.CollDetectSpherePlane=b;})(jigLib);