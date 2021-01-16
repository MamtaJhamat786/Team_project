require 'rubygems'
require 'selenium-webdriver'
require 'test/unit'

class SampleTest < Test::Unit::TestCase
	def setup
        driver = Selenium::WebDriver.for :chrome
	end
    
    def test1 #Header_Test
        driver = Selenium::WebDriver.for :chrome
        driver.navigate.to "http://localhost:8080/en"
        driver.find_element(:link_text, 'About').click
        driver.find_element(:link_text, 'Home').click
        driver.find_element(:link_text, 'About').click
        driver.find_element(:class, 'logo').click
        sleep 2
    end
    
    def test2 #Signup_Test
        driver = Selenium::WebDriver.for :chrome
        driver.navigate.to "http://localhost:8080/en"
        driver.find_element(:link_text, 'Signup').click
        driver.find_element(:id, 'name-input').send_keys('Sample John')
        driver.find_element(:id, 'email-input').send_keys('samplejohn@gmail.com')
        driver.find_element(:id, 'password-input').send_keys('samplejohn')
        driver.find_element(:id, 'homeAddress-input').send_keys('Sample, Tallinn 0987')
        driver.find_element(:id, 'phonenum-input').send_keys('1234567')
        driver.find_element(:id, 'btn-signup').click
        sleep 2
    end

    def test3 #Login_Test
        driver = Selenium::WebDriver.for :chrome
        driver.navigate.to "http://localhost:8080/en"
        driver.find_element(:link_text, 'Login').click
        driver.find_element(:id, 'email-input').send_keys('samplejohn@gmail.com')
        driver.find_element(:id, 'password-input').send_keys('samplejohn')
        driver.find_element(:id, 'btn-login').click
        sleep 2
        driver.find_element(:link_text, 'Profile').click
        sleep 2
    end

    def test4 # Lnaguage Change
        driver = Selenium::WebDriver.for :chrome
        driver.navigate.to "http://localhost:8080/en"
        driver.find_element(:link_text, 'Lang').click
        sleep 2
        driver.find_element(:id, 'EST').click        
        sleep 2
        driver.find_element(:link_text, 'Meist').click
        sleep 2
        driver.find_element(:link_text, 'Lang').click
        driver.find_element(:id, 'ENG').click 
        sleep 2
        driver.save_screenshot('estonian.png')
    end

    def test5 # See the TeamMember
        driver = Selenium::WebDriver.for :chrome
        driver.navigate.to "http://localhost:8080/en"
        driver.find_element(:id, 'search').send_keys("Bask")
        sleep 2 
        driver.find_element(:id, 'btn-seeTeams').click
    end

    def test6 #Create Team Test
        driver = Selenium::WebDriver.for :chrome
        driver.navigate.to "http://localhost:8080/en"
        driver.find_element(:link_text, 'Login').click
        driver.find_element(:id, 'email-input').send_keys('samplejohn@gmail.com')
        driver.find_element(:id, 'password-input').send_keys('samplejohn')
        driver.find_element(:id, 'btn-login').click
        sleep 2
        driver.find_element(:id, 'search').send_keys("Bask")
        sleep 2
        driver.find_element(:id, 'btn-seeTeams').click
        driver.find_element(:id, 'show-btn').click
        sleep 2
        driver.find_element(:id, 'teamName-input').send_keys('sampleTeam')
        driver.find_element(:id, 'btn-create').click
    end

    def test7 #Join Team Test
        driver = Selenium::WebDriver.for :chrome
        driver.navigate.to "http://localhost:8080/en"
        driver.find_element(:link_text, 'Login').click
        driver.find_element(:id, 'email-input').send_keys('samplejohn@gmail.com')
        driver.find_element(:id, 'password-input').send_keys('samplejohn')
        driver.find_element(:id, 'btn-login').click
        sleep 2
        driver.find_element(:id, 'search').send_keys("Bask")
        driver.find_element(:id, 'btn-seeTeams').click
        sleep 2
        driver.find_element(:id, 'btn-joinTeam').click
    end

    def test8 #Delete Team Test
        sleep 5
        driver = Selenium::WebDriver.for :chrome
        driver.navigate.to "http://localhost:8080/en"
        driver.find_element(:link_text, 'Login').click
        driver.find_element(:id, 'email-input').send_keys('samplejohn@gmail.com')
        driver.find_element(:id, 'password-input').send_keys('samplejohn')
        driver.find_element(:id, 'btn-login').click
        sleep 2
        driver.find_element(:id, 'search').send_keys("Bask")
        driver.find_element(:id, 'btn-seeTeams').click
        sleep 2
        driver.find_element(:id, 'btn-deleteTeam').click
    end

    def test9 #Go to Profile Test
        driver = Selenium::WebDriver.for :chrome
        driver.navigate.to "http://localhost:8080/en"
        driver.find_element(:link_text, 'Login').click
        driver.find_element(:id, 'email-input').send_keys('samplejohn@gmail.com')
        driver.find_element(:id, 'password-input').send_keys('samplejohn')
        driver.find_element(:id, 'btn-login').click
        sleep 2
        driver.find_element(:id, 'search').send_keys("Bask")
        driver.find_element(:id, 'btn-seeTeams').click
        sleep 2
        driver.find_element(:id, 'btn-goProfile').click
    end
        

    def quit
        driver.quit
    end
end
