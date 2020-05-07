# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Question.destroy_all

demo = User.create!(username: 'demo', email: 'demo@proofsline.com', password: 'password')
ngoc = User.create!(username: 'ngoc', email: 'ngoc@proofsline.com', password: 'ngociscool!')
euclid = User.create!(username: 'euclid', email: 'euclid@alexandria.com', password: 'geometrybelit')
cady = User.create!(username: 'cady', email: 'cady123@meangirls.com', password: 'wednesdayspink123')
regina = User.create!(username: 'regina', email: 'regina@meangirls.com', password: '1233456l')

question1 = Question.create!(title: 'Demo title', 
                                body: 'The demo should be able to edit and delete this question', 
                                author_id: demo.id)
question2 = Question.create!(title: 'Exterior Angle Theorem', 
                                body: 'Given triangle ABC, 
                                if one of the sides (AC) is extended, then the exterior angle produced (angle DAB) is 
                                greater than either of the two interior and opposite angles (angle BCA or angle ABC)', 
                                author_id: cady.id)
question3 = Question.create!(title: 'Find the limit', 
                                body: 'What is the limit of sin(1/x) as x approaches 0?', 
                                author_id: regina.id)
question4 = Question.create!(title: 'Gauss quadrature method in MATLAB', 
                                body: 'Can someone explain how this code works? function [I] = gauss(f,a,b)
                                        %Basic two-point Gauss procedure 
                                        x=[-0.5773502692,0.5773502692];
                                        c=[1,1];
                                        for i=1:length(x)
                                        nc(i)=c(i)*((b-a)/2);
                                        nx(i)=(((b-a)*x(i))+(b+a))/2;
                                        end
                                        I=(nc(1)*f(nx(1)))+(nc(2)*f(nx(2)));
                                    end',
                                author_id: euclid.id)
question5 = Question.create!(title: 'Partial differential equations textbook recommendations',
                                body: "Looking for textbook recommendations for a first timer learning partial 
                                        differential equations. I'm taking a college course next quarter on it and
                                        wanted a head start. The class recommendation is 'A First Course in Partial 
                                        Differential Equations by H.F. Weinberger, is it worth the purchase?",
                                        author_id: ngoc.id)