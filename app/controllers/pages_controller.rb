class PagesController < ApplicationController
  COUNTIES_PATH = Rails.root.join('config', 'counties.yml')

  caches_page :home

  def home
    @counties = YAML.load_file(COUNTIES_PATH)['counties'].collect{|county|
      County.new(county) }
  end
end
