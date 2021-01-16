require 'rubygems'
require 'selenium-webdriver'
require 'test/unit'

class SampleTest < Test::Unit::TestCase
	def setup
        driver = Selenium::WebDriver.for :chrome
	end
    
    def test1 #Signup_Test_Negative
        driver = Selenium::WebDriver.for :chrome
        driver.navigate.to "http://localhost:8080/en"
        driver.find_element(:link_text, 'Signup').click
        driver.find_element(:id, 'name-input').send_keys('abc')
        driver.find_element(:id, 'email-input').send_keys('abc')
        driver.find_element(:id, 'password-input').send_keys('abc')
        driver.find_element(:id, 'homeAddress-input').send_keys('1')
        driver.find_element(:id, 'phonenum-input').send_keys('1')
        driver.find_element(:id, 'btn-signup').click
        sleep 2
        driver.find_element(:id, 'btn-seeTeams').click
        sleep 2
    end

    def test2 #Login_Test_Negative
        driver = Selenium::WebDriver.for :chrome
        driver.navigate.to "http://localhost:8080/en"
        driver.find_element(:link_text, 'Login').click
        driver.find_element(:id, 'email-input').send_keys('franzkafka@gamil.com')
        driver.find_element(:id, 'password-input').send_keys('The Trial')
        driver.find_element(:id, 'btn-login').click
        sleep 2
        driver.find_element(:link_text, 'Profile').click
        sleep 2
    end

    def quit
        driver.quit
    end
end
