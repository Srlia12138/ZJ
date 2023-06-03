var adds = new Array(
  "https://baike.baidu.com/item/%E9%B2%81%E8%BF%85/36231?fromModule=lemma_inlink",
  "https://baike.baidu.com/item/%E5%BE%90%E5%BF%97%E6%91%A9/286345?fromModule=lemma_inlink",
  "https://baike.baidu.com/item/%E9%87%91%E5%BA%B8/128951?fromModule=lemma_inlink",
  "https://baike.baidu.com/item/%E5%86%AF%E9%AA%A5%E6%89%8D/630264?fromModule=lemma_inlink",
  "https://baike.baidu.com/item/%E7%8E%8B%E5%9B%BD%E7%BB%B4/119039?fromModule=lemma_inlink",
  "https://baike.baidu.com/item/%E9%99%86%E6%B8%B8/125079?fromModule=lemma_inlink",
  "https://baike.baidu.com/item/%E6%9D%8E%E6%B8%94/3817?fromModule=lemma_inlink",
  "https://baike.baidu.com/item/%E9%BE%9A%E8%87%AA%E7%8F%8D/203658?fromModule=lemma_inlink",
  "https://baike.baidu.com/item/%E9%AA%86%E5%AE%BE%E7%8E%8B/250755?fromModule=lemma_inlink",
  "https://baike.baidu.com/item/%E8%A5%BF%E6%96%BD/674085?fromModule=lemma_inlink",
  "https://baike.baidu.com/item/%E5%AD%99%E5%A4%AB%E4%BA%BA/69376?fromModule=lemma_inlink&fromtitle=%E5%AD%99%E5%B0%9A%E9%A6%99&fromid=302",
  "https://baike.baidu.com/item/%E6%9E%97%E5%BE%BD%E5%9B%A0/236792?fromModule=lemma_inlink",
  "https://baike.baidu.com/item/%E4%BD%95%E7%82%B3%E6%9D%BE/3954690?fromModule=lemma_inlink",
  "https://baike.baidu.com/item/%E6%9C%B1%E9%9C%87%E4%BA%A8/429972?fromModule=lemma_inlink&fromtitle=%E6%9C%B1%E4%B8%B9%E6%BA%AA&fromid=1341775",
  "https://baike.baidu.com/item/%E7%A7%8B%E7%91%BE/30055?fromModule=lemma_inlink",
  "https://baike.baidu.com/item/%E7%AB%BA%E5%8F%AF%E6%A1%A2/406159?fromModule=lemma_inlink",
  "https://baike.baidu.com/item/%E4%B8%B0%E5%AD%90%E6%81%BA/321631",
  "https://baike.baidu.com/item/%E9%A9%AC%E4%BA%91/6252?fromModule=lemma_inlink",
  "https://baike.baidu.com/item/%E6%9D%A8%E5%80%A9/20722658?fromModule=lemma_inlink",
  "https://baike.baidu.com/item/%E7%8E%8B%E5%8A%9B%E5%AE%8F/104887?fromModule=lemma_inlink",
  "https://baike.baidu.com/item/%E8%92%8B%E4%BB%8B%E7%9F%B3/184548?fromModule=lemma_inlink",
  "https://baike.baidu.com/item/%E5%91%A8%E6%81%A9%E6%9D%A5/114814?fromModule=lemma_inlink"
)

//生成从minNum到maxNum的随机数
function randomNum(minNum,maxNum){ 
  switch(arguments.length){ 
      case 1: 
          return parseInt(Math.random()*minNum+1,10); 
      break; 
      case 2: 
          return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
      break; 
          default: 
              return 0; 
          break; 
  } 
} 

function jump() {
  index = randomNum(0,adds.length)
  window.location.href = adds[index] ;
}