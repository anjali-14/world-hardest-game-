var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["35deaa13-0216-4062-b282-c5e1f1a179c2","8330f401-cd3b-48cc-9dfd-0b93926916f2","1d52adb4-49a0-4e6f-adec-ae0bff7a6bce","90ff4b79-4484-45dc-9475-dee1bcdb1caf"],"propsByKey":{"35deaa13-0216-4062-b282-c5e1f1a179c2":{"name":"kid_12_side_1","sourceUrl":"assets/api/v1/animation-library/gamelab/6JewnaaEkHaL4bWJeGP6QuOT..cTBDT7/category_people/kid_12_side.png","frameSize":{"x":206,"y":341},"frameCount":1,"looping":true,"frameDelay":2,"version":"6JewnaaEkHaL4bWJeGP6QuOT..cTBDT7","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":206,"y":341},"rootRelativePath":"assets/api/v1/animation-library/gamelab/6JewnaaEkHaL4bWJeGP6QuOT..cTBDT7/category_people/kid_12_side.png"},"8330f401-cd3b-48cc-9dfd-0b93926916f2":{"name":"kid_12_side_1_copy_1","sourceUrl":"assets/api/v1/animation-library/gamelab/6JewnaaEkHaL4bWJeGP6QuOT..cTBDT7/category_people/kid_12_side.png","frameSize":{"x":206,"y":341},"frameCount":1,"looping":true,"frameDelay":2,"version":"6JewnaaEkHaL4bWJeGP6QuOT..cTBDT7","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":206,"y":341},"rootRelativePath":"assets/api/v1/animation-library/gamelab/6JewnaaEkHaL4bWJeGP6QuOT..cTBDT7/category_people/kid_12_side.png"},"1d52adb4-49a0-4e6f-adec-ae0bff7a6bce":{"name":"kid","sourceUrl":null,"frameSize":{"x":206,"y":347},"frameCount":1,"looping":true,"frameDelay":12,"version":"2KJIuFGEEtaaWteHZhTdpChkDnxIBm9i","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":206,"y":347},"rootRelativePath":"assets/1d52adb4-49a0-4e6f-adec-ae0bff7a6bce.png"},"90ff4b79-4484-45dc-9475-dee1bcdb1caf":{"name":"cloud","sourceUrl":"assets/api/v1/animation-library/gamelab/SFSiRCSKpY8XgbZ8r02qMYlqqmsdNbrh/category_icons/cloud.png","frameSize":{"x":386,"y":268},"frameCount":1,"looping":true,"frameDelay":2,"version":"SFSiRCSKpY8XgbZ8r02qMYlqqmsdNbrh","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":268},"rootRelativePath":"assets/api/v1/animation-library/gamelab/SFSiRCSKpY8XgbZ8r02qMYlqqmsdNbrh/category_icons/cloud.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

  var b1 = createSprite(72,390,25,200)
  var b2 = createSprite(155,350,25,100)
  var b3 = createSprite(211,350,25,89)
  var b4 = createSprite(260,337,25,100)
  var b5 = createSprite(302,337,25,250)
  var b6= createSprite(352,300,25,300)
  var b7 = createSprite(20,355,25,25)
  var b8 = createSprite(102,40,25,25)


b1.shapeColor='pink'
b2.shapeColor='yellow'
b3.shapeColor='green'
b4.shapeColor='red'
b5.shapeColor='white'
b6.shapeColor='maroon'
b7.shapeColor='orange'

b7.setAnimation("kid");
b7.setVelocity(100,0)
b7.scale=0.4

b8.setAnimation('cloud')

background("blue")







 function draw() {
   drawSprites()
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
