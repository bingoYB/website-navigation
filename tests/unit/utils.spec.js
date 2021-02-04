import utils from '@/util'
import { expect } from 'chai';  


describe("节流函数 utils::throttle", function () {
	it("base:节流功能测试", function (done) {
		let x=0
		function testFn(){
			x++
		}
		const retrunFun = utils.throttle(testFn,500)

		retrunFun()
		retrunFun()
		setTimeout(() => {
			retrunFun()
			expect(x).to.be.equal(1)
		}, 400);

		setTimeout(() => {
			retrunFun()
			expect(x).to.be.equal(2)
			done()
		}, 501);

	});
});

describe("防抖函数 utils::debounce", function () {
	it("base:防抖功能测试", function (done) {
		let x = 0
		function testFn() {
			x++
		}
		const retrunFun = utils.debounce(testFn, 200)

		retrunFun()
		expect(x).to.be.equal(0)
		setTimeout(() => {
			retrunFun()
			expect(x).to.be.equal(0)

			setTimeout(() => {
				retrunFun()
				expect(x).to.be.equal(1)

				setTimeout(() => {
					expect(x).to.be.equal(2)
					done()
				}, 250);
			}, 250);
		}, 100);

	});
});

describe('事件代理 utils::EA',()=>{
	beforeEach(function () {
		document.body.innerHTML = `
			<div id="container">
				<span>1</span>
				<span>2</span>
			</div>
		`;
	});

	it('on：事件绑定功能测试',(done)=>{

		utils.EA(document.querySelector('#container')).on('click','span',function(e,target){
			target.innerText ='123'
		})

		document.querySelectorAll('#container span').forEach(el=>{
			el.click()
			expect(el.innerText).to.equal("123");
		})

		done()

	})


	it('once：事件绑定只执行一次功能测试',done=>{
	
		utils.EA(document.querySelector('#container')).once('click', 'span', function (e, target) {
			target.innerText = '123'
		})

		const el1 = document.querySelectorAll('#container span')[0]
		document.querySelectorAll('#container span')[0].click()
		expect(el1.innerText).to.equal("123");

		const el2 = document.querySelectorAll('#container span')[1]
		document.querySelectorAll('#container span')[0].click()
		expect(el2.innerText).to.equal("2");

		done()
	})
})


describe('序列化函数 utils::serializeObject',()=>{
	it("base:防抖功能测试", function () {
		const result = utils.serializeObject({
			a: 123,
			b: "test"
		})

		expect(result).to.be.equal("a=123&b=test")
	})
})



