module PagesHelper
  def each_county(&block)
    @counties.each(&block)
  end
end
